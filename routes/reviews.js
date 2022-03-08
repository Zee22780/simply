import { Router } from 'express'
import * as reviewsCtrl from '../controllers/reviews.js'
import * as employeesCtrl from '../controllers/employees.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET localhost:3000/reviews/new
router.get('/new', reviewsCtrl.new)

// POST localhost:3000/profiles?
router.post('/new', reviewsCtrl.createReview)

export {
  router
}