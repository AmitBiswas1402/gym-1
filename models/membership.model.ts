import mongoose, { Schema, Document } from "mongoose";

export interface MembershipType extends Document {
  name: string;
  startDate: string;
  endDate: string;
  program: string;
}

const MembershipSchema = new Schema<MembershipType>(
  {
    name: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    program: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Membership ||
  mongoose.model<MembershipType>("Membership", MembershipSchema);
