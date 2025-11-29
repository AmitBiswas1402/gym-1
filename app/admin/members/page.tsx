"use client";
import { useEffect, useState } from "react";

const AdminMembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);

  const getStatus = (endDate: string) => {
    const today = new Date();
    return new Date(endDate) >= today
      ? "Membership Active"
      : "Membership Expired";
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/memberships/${id}`, {
        method: "DELETE",
      });

      setMembers((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.log(error);
      alert("Failed to delete the member");
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/memberships");
        const data = await res.json();

        // ✅ Only Members
        const onlyMembers = data.filter(
          (user: Member) => user.joinAs === "Member"
        );

        setMembers(onlyMembers);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        🏋️‍♂️ Gym Members
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => {
          return (
            <div
              key={member._id}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 space-y-2"
            >
              <h2 className="text-2xl font-semibold text-green-400">
                {member.name}
              </h2>

              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> {member.email}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">Program:</span> {member.program}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">Plan:</span> {member.plans}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">Start:</span>{" "}
                {new Date(member.startDate).toLocaleDateString()}
              </p>

              <p className="text-gray-300">
                <span className="font-semibold">End:</span>{" "}
                {new Date(member.endDate).toLocaleDateString()}
              </p>

              <div
                className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${
                  getStatus(member.endDate) === "Membership Active"
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              >
                {getStatus(member.endDate)}
              </div>

              <button
                onClick={() => handleDelete(member._id)}
                className="mt-4 w-full bg-red-600 hover:bg-red-500 py-2 rounded font-semibold transition"
              >
                Delete Member
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminMembersPage;
