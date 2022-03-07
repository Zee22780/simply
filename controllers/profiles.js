import { Profile } from '../models/profile.js'

function show(req, res) {
    Profile.findById(req.user.profile._id).populate('employees')
    .then(self => {
      const isSelf = self._id.equals(req.user.profile._id)
      console.log(self)
      res.render("profiles/show", {
        title: `${self.name}'s profile`,
        self,
        isSelf,
      })
    })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  show,
}