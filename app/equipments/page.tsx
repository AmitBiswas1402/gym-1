"use client";

import Image from "next/image";

const EquipmentsPage = () => {
  const equipments: Equipment[] = [
    {
      id: "e1",
      name: "Adjustable Dumbbells",
      category: "Strength",
      description:
        "Premium steel dumbbells with rubber grip for strength and hypertrophy training.",
      usage:
        "All levels — ideal for full-body workouts and isolated movements.",
      availability: "Always Available",
      image: "https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVtYmVsbHN8ZW58MHwwfDB8fHww",
    },
    {
      id: "e2",
      name: "Treadmill Pro Max",
      category: "Cardio",
      description:
        "Commercial-grade treadmill with multiple speed modes, incline settings, and heart rate monitoring.",
      usage:
        "Ideal for beginners to athletes focusing on stamina and endurance.",
      availability: "6AM – 10PM Daily",
      image:
        "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
    },
    {
      id: "e3",
      name: "Olympic Barbell Set",
      category: "Strength",
      description:
        "Advanced Olympic bar with calibrated plates for powerlifting and heavy lifts.",
      usage: "Recommended for intermediate & advanced lifters.",
      availability: "Available on Platform 1, 2, 3",
      image:
        "https://images.pexels.com/photos/28636776/pexels-photo-28636776.png",
    },
    {
      id: "e4",
      name: "Rowing Machine",
      category: "Cardio",
      description:
        "Smooth resistance rowing machine to improve full-body mobility and cardiovascular performance.",
      usage: "Suitable for fat loss & endurance.",
      availability: "Available: 8AM – 8PM",
      image:
        "https://images.pexels.com/photos/29859465/pexels-photo-29859465.jpeg",
    },
    {
      id: "e5",
      name: "Yoga Mats & Blocks",
      category: "Flexibility",
      description:
        "Soft-grip mats and stability blocks ideal for yoga, mobility, and stretching sessions.",
      usage: "Perfect for warm-ups, cool-downs, and recovery.",
      availability: "Always Available (Studio Room)",
      image:
        "https://images.unsplash.com/photo-1761971975962-9cc397e2ba2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHlvZ2ElMjBtYXRzfGVufDB8MHwwfHx8MA%3D%3D",
    },
    {
      id: "e6",
      name: "Punching Bag",
      category: "Combat",
      description:
        "Professional-grade heavy bag for boxing, MMA conditioning, and explosive training.",
      usage: "Good for endurance, coordination, and core strength.",
      availability: "Available near Combat Corner",
      image:
        "https://images.unsplash.com/photo-1716306886418-f84f6d4c2f3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHVuY2hpbmclMjBiYWd8ZW58MHwwfDB8fHww",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-12 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-green-400">
          Our Gym Equipments
        </h1>
        <p className="text-center text-gray-300 mb-10">
          High-quality, commercial-grade equipment designed for strength,
          endurance, conditioning, and flexibility training.
        </p>

        {/* Equipment Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {equipments.map((eq) => (
            <article
              key={eq.id}
              className="rounded-2xl overflow-hidden border border-gray-700 shadow-lg backdrop-blur-sm bg-black/40"
            >
              {/* Image */}
              <div className="relative h-56 w-full">
                <Image
                  src={eq.image}
                  alt={eq.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-green-300">
                  {eq.name}
                </h3>
                <p className="text-sm text-gray-300 mb-2">
                  {eq.category} Equipment
                </p>

                <p className="text-gray-200 mb-3 line-clamp-3">
                  {eq.description}
                </p>

                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-semibold text-gray-300">
                    Ideal Usage:
                  </span>{" "}
                  {eq.usage}
                </p>

                <p className="text-sm text-gray-400 whitespace-normal break-words">
                  <span className="font-semibold text-gray-300">
                    Availability:
                  </span>{" "}
                  {eq.availability}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentsPage;
