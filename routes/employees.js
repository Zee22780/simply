import { Router } from 'express'
import * as employeesCtrl from '../controllers/employees.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/employees
router.get('/', isLoggedIn, employeesCtrl.index)
// GET localhost:3000/employees/new
router.get('/new', isLoggedIn, employeesCtrl.new)
// GET localhost:3000/employees/:id
router.get('/:id', isLoggedIn, employeesCtrl.show)
// GET localhost:3000/employees/:id/edit
router.get("/:id/edit", isLoggedIn, employeesCtrl.edit)

// POST localhost:3000/employees
router.post('/', isLoggedIn, employeesCtrl.create)

// PUT localhost:3000/employees/:id
router.put('/:id', isLoggedIn, employeesCtrl.update)

// DELETE localhost:3000/employees/:id
router.delete('/:id', isLoggedIn, employeesCtrl.delete)

export {
  router
}