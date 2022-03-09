import { Profile } from "../models/profile.js"
import { Employee } from "../models/employee.js"

function newReview(req, res) {
  console.log(req.user)
  Profile.findById(req.user.profile._id).populate('employees')
    .then(self => {
      
      const isSelf = self._id.equals(req.user.profile._id)
      console.log('hello zuri', self)
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


export {
  newReview as new,
}