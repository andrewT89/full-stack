import mongoose, { Schema } from "mongoose";

const ClientSchema = new Schema({
  identification: { type: String, required: true, trim: true,unique: true },
  balance: { type: Number, required: true, trim: true },
  phoneNumber: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Wallet", ClientSchema);
