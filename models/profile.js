import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  employees:[{type: mongoose.Schema.Types.ObjectId, ref: 'Employee'}]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
