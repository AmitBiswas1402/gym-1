"use client";

import { useState } from "react";
import Image from "next/image";

const Trainers = () => {
  const [selected, setSelected] = useState<Trainer | null>(null);

  const trainers: Trainer[] = [
    {
      id: "t1",
      name: "Arjun Das",
      title: "Senior Strength Coach",
      specialty: ["Strength Training", "Powerlifting", "Hypertrophy"],
      bio: "10+ years coaching athletes and everyday lifters. Focus on safe progress, correct form, and personalized strength programs.",
      availability: "Mon - Fri: 6:00 AM - 10:00 AM",
      image:
        "https://images.pexels.com/photos/3912516/pexels-photo-3912516.jpeg",
      contact: "mailto:arjun@fitzone.com",
    },
    {
      id: "t2",
      name: "Maya Rao",
      title: "Cardio & Conditioning Coach",
      specialty: ["HIIT", "Endurance", "Weight Loss"],
      bio: "Expert in high-intensity training and metabolic conditioning. Helps clients improve stamina and burn fat efficiently.",
      availability: "Tue, Thu, Sat: 5:00 PM - 8:00 PM",
      image:
        "https://images.pexels.com/photos/6739930/pexels-photo-6739930.jpeg",
      contact: "mailto:maya@fitzone.com",
    },
    {
      id: "t3",
      name: "Rina Sen",
      title: "Yoga & Mobility Instructor",
      specialty: ["Yoga", "Mobility", "Recovery"],
      bio: "Blends yoga with mobility drills to improve flexibility, posture, and recovery. Great for beginners and advanced practitioners.",
      availability: "Mon, Wed, Fri: 7:00 AM - 9:00 AM",
      image:
        "https://images.pexels.com/photos/6922127/pexels-photo-6922127.jpeg",
      contact: "mailto:rina@fitzone.com",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-green-400">
          Meet Our Trainers
        </h1>
        <p className="text-center text-gray-300 mb-10">
          Professional, experienced, and dedicated coaches to help you reach
          your fitness goals.
        </p>

        {/* Trainer Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((t) => (
            <article
              key={t.id}
              className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-lg backdrop-blur-sm bg-black/40"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-green-300">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">{t.title}</p>

                <p className="text-gray-200 mb-3 line-clamp-2">{t.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {t.specialty.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-300">Availability</p>
                    <p className="text-sm font-medium whitespace-normal break-words">
                      {t.availability}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelected(t)}
                      className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold hover:bg-green-600"
                    >
                      View
                    </button>

                    <a
                      href={t.contact}
                      className="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-sm"
                    >
                      Contact
                    </a>
                  </div>
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

            <div className="relative w-full max-w-2xl bg-zinc-900 rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
              <div className="relative h-64 w-full">
                <Image
                  src={selected.image}
                  alt={selected.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-white">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-green-300">
                      {selected.name}
                    </h2>
                    <p className="text-sm text-gray-300">{selected.title}</p>

                    <p className="mt-4 text-gray-200">{selected.bio}</p>

                    <div className="mt-4">
                      <p className="text-sm font-semibold text-gray-300">
                        Specialties
                      </p>
                      <div className="flex gap-2 mt-2 flex-wrap">
                        {selected.specialty.map((s) => (
                          <span
                            key={s}
                            className="text-sm px-3 py-1 rounded-full bg-white/10"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-40 text-right">
                    <p className="text-sm text-gray-300">Availability</p>
                    <p className="font-medium whitespace-normal break-words">
                      {selected.availability}
                    </p>

                    <a
                      href={selected.contact}
                      className="inline-block mt-4 px-4 py-2 bg-green-500 text-black rounded font-semibold"
                    >
                      Book Session
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl leading-none"
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

export default Trainers;
