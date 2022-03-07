import { Profile } from "../models/profile.js"
import { Employee } from "../models/employee.js"

function newReview(req, res) {
  res.render('reviews/new')
}

export {
  newReview as new,
}