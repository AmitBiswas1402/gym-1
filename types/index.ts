type ProgramOption =
  | "None"
  | "Strength Training"
  | "Cardio Blast"
  | "Yoga & Flexibility"
  | "HIIT Power";

type PlanOption =
  | "None"
  | "One Day Pass"
  | "Monthly Membembership"
  | "Annual Membership"

type JoinAsOption = "Member" | "Trainer";

type FormDataType = {
  name: string;
  email: string;
  programs: ProgramOption;
  startDate: string;
  endDate: string;
  plans: PlanOption;
  joinAs: JoinAsOption;
};

type Member = {
  _id: string;
  name: string;
  email: string;
  program: string;
  plans: string;
  joinAs: string;
  startDate: string;
  endDate: string;
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

type Programs = {
  id: string;
  name: string;
  category: string;
  benefits: string[];
  description: string;
  suitableFor: string;
  duration: string;
  image: string;
};