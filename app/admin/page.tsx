"use client";
import { useEffect, useState } from "react";

const MemebersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  const getStatus = (endDate: string) => {
    const today = new Date();
    return new Date(endDate) >= today
      ? "Membership Active"
      : "Membership Expired";
  };

  const fetchMembers = async () => {
    try {
      const res = await fetch("/api/memberships");
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        Registered Gym Users
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-semibold mb-2 text-green-400">
              {member.name}
            </h2>

            <p className="text-gray-300 mb-1">
              <span className="font-semibold text-gray-400">Email:</span>{" "}
              {member.email}
            </p>

            <p className="text-gray-300 mb-1">
              <span className="font-semibold text-gray-400">Program:</span>{" "}
            </p>

            {/* Start Date */}
            <p className="text-gray-300 mb-1">
              <span className="font-semibold text-gray-400">Start Date:</span>{" "}
              {new Date(member.startDate).toLocaleDateString()}
            </p>

            {/* End Date */}
            <p className="text-gray-300 mb-1">
              <span className="font-semibold text-gray-400">End Date:</span>{" "}
              {new Date(member.endDate).toLocaleDateString()}
            </p>

            <div
              className={`inline-block px-4 py-1 rounded-full font-semibold text-sm ${
                getStatus(member.endDate) === "Membership Active"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {getStatus(member.endDate)}
            </div>
          </div>
        ))}
      </div>

      {members.length === 0 && (
        <p className="text-center text-gray-400 mt-10 text-lg">
          No members registered yet.
        </p>
      )}
    </div>
  );
};
export default MemebersPage;
