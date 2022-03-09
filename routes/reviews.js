import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import * as employeesCtrl from '../controllers/employees.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews/new
router.get('/new', isLoggedIn, reviewsCtrl.new)

// POST localhost:3000/employees/:id
router.post('/employees', isLoggedIn, employeesCtrl.createReview)

export {
  router
}