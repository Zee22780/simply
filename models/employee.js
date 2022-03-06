import mongoose from 'mongoose'

const Schema = mongoose.Schema

const employeeSchema = new Schema({
  eName: String,
  startDate: Date,
  title: String,
  department: String,
  location: String,
  mName: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
})

const Employee = mongoose.model('Employee', employeeSchema)

export {
  Employee
}