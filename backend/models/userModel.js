import mongoose from 'mongoose';

//User object
const userSchema = new mongoose.Schema(
  {
  name: { type: String, required: true} ,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false, reqired: true }
  }, {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;