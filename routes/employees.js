import { Router } from 'express'
import * as employeesCtrl from '../controllers/employees.js'
import * as reviewsCtrl from '../controllers/reviews.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/employees
router.get('/', isLoggedIn, employeesCtrl.index)
// GET localhost:3000/employees/new
router.get('/new', isLoggedIn, employeesCtrl.new)
// GET localhost:3000/employees/:id
router.get('/:id', isLoggedIn, employeesCtrl.show)

// POST localhost:3000/employees
router.post('/', isLoggedIn, employeesCtrl.create)


export {
  router
}