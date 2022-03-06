import { Router } from 'express'
import * as employeesCtrl from "../controllers/employees.js"
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/employees
router.get('/', employeesCtrl.index)
// GET localhost:3000/employees/new
router.get('/new', employeesCtrl.new)
// GET localhost:3000/employees/:id
router.get('/:id', employeesCtrl.show)

// POST localhost:3000/employees
router.post("/", isLoggedIn, employeesCtrl.create)

export {
  router
}