import { Employee } from "../models/employee.js"

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
    res.redirect('/employees')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/employees')
  })
}

export {
  index,
  newEmployee as new,
  create,
}