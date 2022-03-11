import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  qOne: String,
  qTwo: String,
  rating: {type: Number, min: 1, max: 5},
})

const employeeSchema = new Schema({
  eName: {
    type: String,
    unique: true,
  },
  startDate: {
    type: Date
  },
  title: String,
  department: String,
  location: String,
  mName: String,
  perfRev: [reviewSchema],
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Employee = mongoose.model('Employee', employeeSchema)

export {
  Employee
}