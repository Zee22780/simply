import { Employee } from "../models/employee.js"

function newEmployee(req, res) {
  res.render('employees/new')
}

export {
  newEmployee as new,
}