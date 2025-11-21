import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMembership extends Document {
  name: string;
  price: number;
  duration: string;
  features: string[];
}

const MembershipSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  features: { type: [String], default: [] },
});

const Membership: Model<IMembership> =
  mongoose.models.Membership ||
  mongoose.model<IMembership>("Membership", MembershipSchema);

export default Membership;
