import { Employee } from "../models/employee.js"
import { Profile } from "../models/profile.js"

function index(req, res) {
  Employee.find({})
  .then(employees => {
    res.render('employees/index', {
      employees,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/employees')
  })
}

function newEmployee(req, res) {
  res.render('employees/new')
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Employee.create(req.body)
  .then(employee => {
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.employees.push(employee._id)
      profile.save()
      res.redirect('/employees')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/employees')
  })
}

function show(req, res) {
  Employee.findById(req.params.id) 
  .populate("owner")
  .then(employee => {
    console.log('hi employee', employee)
    res.render('employees/show', {
      employee,
      title: "show"
    })
  })
  .catch(err => {
    res.redirect("/employees")
  })
}

// function createReview(req, res) {
//   console.log(req.body)
//   Employee.find({eName: req.body.eName}, function(err, employee) {
//     console.log(employee)
//     // employee.perfRev.push(req.body)
//     console.log('hello out there', employee._id)
//     employee.save(function(err){
//       res.redirect(`/employees/${employee._id}`)
//     })
//   })
// }

function createReview(req, res) {
  Employee.findById(req.body.employeeId)
    .then(employee => {
      employee.perfRev.push(req.body)
      employee.save()
      .then(()=> {
        res.redirect(`/employees/${req.body.employeeId}`)
      })
    })
}

export {
  index,
  newEmployee as new,
  create,
  show,
  createReview
}