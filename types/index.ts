type ProgramOption =
  | "None"
  | "Strength Training"
  | "Cardio Blast"
  | "Yoga & Flexibility"
  | "HIIT Power";

interface FormDataType {
  name: string;
  email: string;
  password: string;
  program: ProgramOption;
}