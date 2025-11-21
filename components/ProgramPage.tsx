import Image from "next/image";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build muscle and boost power with structured resistance workouts tailored for all experience levels.",
    duration: "8 Weeks",
    level: "Intermediate",
    image:
      "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd5bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Cardio Blast",
    description:
    "Enhance endurance, stamina, and heart health with high-intensity cardio routines.",
    duration: "6 Weeks",
    level: "Beginner",
    image:
      "https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3ltfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Improve mobility, balance, and mindfulness through calming yoga sessions.",
    duration: "10 Weeks",
    level: "All Levels",
    image:
      "https://plus.unsplash.com/premium_photo-1661604445845-4c75a36cb93b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMGluJTIwZ3ltfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
  },
  {
    title: "HIIT Power",
    description:
      "Torch calories and build strength fast with our intense HIIT circuit program.",
    duration: "4 Weeks",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
  },
];

const ProgramPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white py-20 px-6 md:px-12 lg:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-400">
        Our Programs
      </h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-zinc-800 border border-green-500 rounded-xl p-5 shadow-lg hover:scale-105 hover:shadow-green-400/30 transition-transform duration-200"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-2">{program.title}</h2>
            <p className="text-gray-300 mb-3">{program.description}</p>
            <p className="text-sm text-gray-400">Duration: {program.duration}</p>
            <p className="text-sm text-gray-400 mb-4">Level: {program.level}</p>

            <button className="bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPage;
