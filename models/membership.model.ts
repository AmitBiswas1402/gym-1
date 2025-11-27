import mongoose, { Schema } from "mongoose";

const MembershipSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    program: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    plans: { type: String, required: true },
    joinAs: { type: String, required: true },
  },
  { timestamps: true }
);

const Membership =
  mongoose.models.Membership || mongoose.model("Membership", MembershipSchema);

export default Membership;
