import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProgram extends Document {
  title: string;
  description: string;
  image: string;
}

const ProgramSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Program: Model<IProgram> =
  mongoose.models.Program ||
  mongoose.model<IProgram>("Program", ProgramSchema);

export default Program;
