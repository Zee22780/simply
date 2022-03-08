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
    console.log(employee)
    res.render('employees/show', {
      employee,
      title: "show"
    })
  })
  .catch(err => {
    res.redirect("/employees")
  })
}

function createReview(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    employee.perfRev.push(req.body)
    employee.save(function(err){
      res.redirect(`/profile/${profile._id}`)
    })
  })
}

export {
  index,
  newEmployee as new,
  create,
  show
}