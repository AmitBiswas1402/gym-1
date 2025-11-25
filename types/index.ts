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

type Trainer = {
  id: string;
  name: string;
  title: string;
  specialty: string[];
  bio: string;
  availability: string;
  image: string;
  contact?: string;
};

type Equipment = {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  availability: string;
  image: string;
};

type Program = {
  id: string;
  name: string;
  category: string;
  benefits: string[];
  description: string;
  suitableFor: string;
  duration: string;
  image: string;
};