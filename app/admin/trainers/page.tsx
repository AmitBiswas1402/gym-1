"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TrainersPage = () => {
  const [trainers, setTrainers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this trainer?")) return;

    try {
      await fetch(`/api/memberships/${id}`, { method: "DELETE" });
      setTrainers((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await fetch("/api/memberships");
        const data = await res.json();
        setTrainers(data.filter((t: Member) => t.joinAs === "Trainer"));
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">
        Gym Trainers
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer) => (
          <div
            key={trainer._id}
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition"
          >
            {/* ✅ TRAINER TAG */}
            <span className="text-xs bg-purple-600 px-3 py-1 rounded-full">
              Trainer
            </span>

            <h2 className="text-purple-400 text-xl font-semibold mt-3">
              {trainer.name}
            </h2>

            <p className="text-gray-300">Email: {trainer.email}</p>
            <p className="text-gray-300">Speciality: {trainer.program}</p>
            <p className="text-gray-300">Plan: {trainer.plans}</p>

            {/* ✅ DELETE + EDIT */}
            <div className="flex gap-4 mt-5">
              <button
                onClick={() => handleDelete(trainer._id)}
                className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 py-2 rounded-lg font-semibold text-white shadow-md transition flex items-center justify-center gap-2"
              >
                🗑️ Delete
              </button>

              <button
                onClick={() => router.push(`/new-registry?id=${trainer._id}`)}
                className="flex-1 bg-gradient-to-r from-purple-400 to-purple-300 hover:from-purple-300 hover:to-purple-200 py-2 rounded-lg font-semibold text-black shadow-md transition flex items-center justify-center gap-2"
              >
                ✏️ Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainersPage;
