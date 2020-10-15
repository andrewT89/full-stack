import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const UserSchema = new Schema({
  userName: { type: String, required: true, trim: true,unique: true },
  identification: { type: String, required: true, trim: true,unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.plugin(uniqueValidator); // Validator field schema

export default mongoose.model("User", UserSchema);