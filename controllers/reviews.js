import { Profile } from "../models/profile.js"
import { Employee } from "../models/employee.js"

function newReview(req, res) {
  console.log(req.user)
  Profile.findById(req.user.profile._id).populate('employees')
    .then(self => {
      const isSelf = self._id.equals(req.user.profile._id)
      console.log(self)
      res.render("reviews/new", {
        self,
        isSelf,
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("reviews/new")
    })
}

function createReview(req, res) {
  Employee.findById(req.params.id, function(err, employee) {
    employee.perfRev.push(req.body)
    employee.save(function(err){
      res.redirect(`/profile/${profile._id}`)
    })
  })
}

export {
  newReview as new,
  createReview
}