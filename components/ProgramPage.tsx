"use client";
import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build muscle and boost power with structured resistance workouts tailored for all experience levels.",
    duration: "8 Weeks",
    level: "Intermediate",
    image:
      "https://plus.unsplash.com/premium_photo-1670505062582-fdaa83c23c9e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    steps: [
      "5–10 min treadmill warm-up",
      "Barbell squats – 4x10",
      "Bench press – 4x10",
      "Lat pulldown – 3x12",
      "Bicep curls – 3x15",
      "Plank hold – 3 rounds",
      "Full body stretching – 10 min",
    ],
  },
  {
    title: "Cardio Blast",
    description:
      "Enhance endurance, stamina, and heart health with high-intensity cardio routines.",
    duration: "6 Weeks",
    level: "Beginner",
    image:
      "https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    steps: [
      "5 min brisk walk",
      "Jump rope – 3 rounds",
      "Cycling – 10 min",
      "Mountain climbers – 3x30 sec",
      "Stair running – 5 min",
      "Light jogging cool-down – 5 min",
    ],
  },
  {
    title: "Yoga & Flexibility",
    description:
      "Improve mobility, balance, and mindfulness through calming yoga sessions.",
    duration: "10 Weeks",
    level: "All Levels",
    image:
      "https://plus.unsplash.com/premium_photo-1661604445845-4c75a36cb93b?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    steps: [
      "Breathing meditation – 5 min",
      "Neck & shoulder rolls",
      "Surya Namaskar – 5 rounds",
      "Warrior pose sequence",
      "Seated stretching",
      "Shavasana – 8 min",
    ],
  },
  {
    title: "HIIT Power",
    description:
      "Torch calories and build strength fast with our intense HIIT circuit program.",
    duration: "4 Weeks",
    level: "Advanced",
    image:
      "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600",
    steps: [
      "Jumping jacks – 2 min",
      "Burpees – 30 sec ON / 30 sec OFF",
      "Jump squats – 3 rounds",
      "Battle rope – 3 rounds",
      "Plank – 1 minute",
      "Full stretch recovery",
    ],
  },
];

const ProgramPage = () => {
  const [activeProgram, setActiveProgram] = useState<any | null>(null);

  return (
    <div className="w-full min-h-screen text-white py-20 px-6 md:px-12 lg:px-20">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-400">
        Our Programs
      </h1>

      {/* ✅ BLUR PROGRAM CARDS (ABOUT PAGE STYLE) */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-black/40 border border-gray-700 rounded-2xl shadow-lg hover:scale-105 hover:shadow-green-400/30 hover:border-green-500 transition backdrop-blur-md overflow-hidden"
          >
            {/* ✅ IMAGE — NO PADDING */}
            <div className="relative h-48 w-full">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* ✅ CONTENT — WITH PADDING */}
            <div className="p-5">
              <h2 className="text-2xl font-semibold mb-2 text-green-300">
                {program.title}
              </h2>

              <p className="text-gray-300 mb-3">{program.description}</p>

              <p className="text-sm text-gray-400">
                Duration: {program.duration}
              </p>

              <p className="text-sm text-gray-400 mb-4">
                Level: {program.level}
              </p>

              <button
                onClick={() => setActiveProgram(program)}
                className="bg-green-500 text-black px-4 py-2 rounded font-bold hover:bg-green-600 transition w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ STEP-BY-STEP MODAL */}
      {activeProgram && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 px-4">
          <div className="bg-zinc-900 w-full max-w-lg rounded-xl p-6 relative border border-green-500">
            <button
              onClick={() => setActiveProgram(null)}
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-red-400"
            >
              ✖
            </button>

            <h2 className="text-3xl font-bold text-green-400 mb-4">
              {activeProgram.title}
            </h2>

            <p className="text-gray-300 mb-4">
              Follow these step-by-step exercises:
            </p>

            <ol className="space-y-3">
              {activeProgram.steps.map((step: string, idx: number) => (
                <li
                  key={idx}
                  className="bg-zinc-800 px-4 py-2 rounded border border-gray-600 flex gap-3"
                >
                  <span className="text-green-400 font-bold">{idx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgramPage;
