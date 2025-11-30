"use client";

import { useState } from "react";
import Image from "next/image";

const WellnessProgram = () => {
  const [selected, setSelected] = useState<Programs | null>(null);

  const programs: Programs[] = [
    {
      id: "wp1",
      name: "Strength & Conditioning",
      category: "Full Body Training",
      benefits: ["Strength", "Endurance", "Power"],
      description:
        "A structured program to build strength, boost cardiovascular endurance, and improve overall athletic performance.",
      suitableFor: "Beginners to advanced athletes",
      duration: "45–60 minutes/session",
      image:
        "https://images.pexels.com/photos/20400636/pexels-photo-20400636.jpeg",
    },
    {
      id: "wp2",
      name: "Zumba Fitness",
      category: "Dance Workout",
      benefits: ["Fat Loss", "Mobility", "Fun Movements"],
      description:
        "A fun-filled, high-energy dance workout combining Latin and Bollywood rhythms to improve stamina and burn calories.",
      suitableFor: "All age groups",
      duration: "50 minutes",
      image:
        "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVtYmF8ZW58MHwwfDB8fHww",
    },
    {
      id: "wp3",
      name: "Diet Consultation",
      category: "Nutrition",
      benefits: ["Weight Loss", "Muscle Gain", "Healthy Lifestyle"],
      description:
        "Get personalized diet charts tailored to your body type, goals, and daily activity level.",
      suitableFor: "Anyone looking to improve health",
      duration: "20–30 minutes/session",
      image:
        "https://images.unsplash.com/photo-1633339409275-84fb9541ab88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZGlldHxlbnwwfDB8MHx8fDA%3D",
    },
    {
      id: "wp4",
      name: "Therapeutic Yoga",
      category: "Recovery & Wellness",
      benefits: ["Flexibility", "Pain Relief", "Relaxation"],
      description:
        "Slow, mindful yoga routines combined with breathing techniques to restore mobility and reduce stress.",
      suitableFor: "People with pain, stiffness, or stress",
      duration: "45 minutes",
      image:
        "https://images.unsplash.com/photo-1758599880425-7862af0a4b50?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "wp5",
      name: "Mobility & Rehab",
      category: "Physiotherapy Based",
      benefits: ["Joint Health", "Injury Prevention", "Balance"],
      description:
        "Focuses on strengthening stabilizer muscles, improving posture, and reducing risk of injuries.",
      suitableFor: "Athletes & people with mobility issues",
      duration: "30–45 minutes",
      image:
        "https://images.unsplash.com/photo-1645005513709-77336f075dc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
    id: "wp6",
    name: "Pilates Core Training",
    category: "Core & Stability",
    benefits: ["Core Strength", "Posture", "Stability"],
    description:
        "A controlled, low-impact program designed to strengthen the core, improve posture, and enhance overall body stability.",
    suitableFor: "Anyone wanting a stronger core or improved posture",
    duration: "40–50 minutes",
    image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-green-400">
          Wellness Programs
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Programs designed to improve your physical, mental, and emotional well-being.
        </p>

        {/* Programs Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.id}
              className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg backdrop-blur-sm bg-black/40"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-green-300">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{p.category}</p>

                <p className="text-gray-200 mb-3 line-clamp-2">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.benefits.map((b) => (
                    <span
                      key={b}
                      className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-300">
                    {p.duration}
                  </p>

                  <button
                    onClick={() => setSelected(p)}
                    className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600"
                  >
                    View
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelected(null)}
            />

            <div className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-white">
                <h2 className="text-3xl font-bold text-green-300">
                  {selected.name}
                </h2>
                <p className="text-sm text-gray-300">{selected.category}</p>

                <p className="mt-4 text-gray-200">{selected.description}</p>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-300">
                    Benefits
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selected.benefits.map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1 bg-white/10 rounded-full"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-300">
                    Suitable For
                  </p>
                  <p className="mt-1">{selected.suitableFor}</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm font-semibold text-gray-300">Duration</p>
                  <p className="mt-1">{selected.duration}</p>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WellnessProgram;
