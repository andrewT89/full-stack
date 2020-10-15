import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  order: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Client",
  },
  state: {
    type: String,
    default: "PENDIENTE",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model("Order", OrderSchema);
