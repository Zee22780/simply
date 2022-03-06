import { Router } from 'express'
import * as employeesCtrl from "../controllers/employees.js"

const router = Router()

// GET localhost:3000/employees/new
router.get('/new', employeesCtrl.new)

export {
  router
}