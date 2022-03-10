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

function edit(req, res) {
  Employee.findById(req.params.id)
  .then(employee => {
    res.render("employees/edit", {
      employee
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/employees')
  })
}

function update(req,res) {
  Employee.findByIdAndUpdate(req.params.id)
  .then(() => {
    res.redirect("/employees")
  })
}

function deleteEmployee(req, res) {
  Employee.findByIdAndDelete(req.params.id)
  .then(()=> {
    res.redirect('/employees')
  })
}

export {
  index,
  newEmployee as new,
  create,
  show,
  createReview,
  edit,
  update,
  deleteEmployee as delete
}