"use client";
import { useEffect, useState } from "react";

const AdminTrainersPage = () => {
  const [trainers, setTrainers] = useState<Member[]>([]);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/memberships/${id}`, {
        method: "DELETE",
      });

      setTrainers((prev) => prev.filter((t) => t._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete the trainer");
    }
  };

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const res = await fetch("/api/memberships");
        const data = await res.json();

        const onlyTrainers = data.filter(
          (user: Member) => user.joinAs === "Trainer"
        );

        setTrainers(onlyTrainers);
      } catch (error) {
        console.error("Error fetching trainers:", error);
      }
    };

    fetchTrainers();
  }, []);

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-400">
        Gym Trainers
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trainers.map((trainer) => (
          <div
            key={trainer._id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 space-y-2"
          >
            <h2 className="text-2xl font-semibold text-purple-400">
              {trainer.name}
            </h2>

            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> {trainer.email}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold">Specialization:</span>{" "}
              {trainer.program}
            </p>

            <p className="text-gray-300">
              <span className="font-semibold">Plan:</span> {trainer.plans}
            </p>

            <p className="text-green-400 font-semibold mt-2">Trainer Account</p>

            <button
              onClick={() => handleDelete(trainer._id)}
              className="mt-4 w-full bg-red-600 hover:bg-red-500 py-2 rounded font-semibold transition"
            >
              Delete Trainer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminTrainersPage;
