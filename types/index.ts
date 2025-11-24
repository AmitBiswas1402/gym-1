type ProgramOption =
  | "None"
  | "Strength Training"
  | "Cardio Blast"
  | "Yoga & Flexibility"
  | "HIIT Power";

type FormDataType = {
  name: string;
  email: string;
  password: string;
  program: ProgramOption;
  startDate: string;
  endDate: string;
};

type Member = {
  _id: string;
  name: string;
  email: string;
  program: string;
  startDate: string;
  endDate: string;
  createdAt?: string;
};