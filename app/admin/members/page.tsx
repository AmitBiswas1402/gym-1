"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MembersPage = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getStatus = (endDate: string) => {
    return new Date(endDate) >= new Date()
      ? "Membership Active"
      : "Membership Expired";
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this member?")) return;

    try {
      await fetch(`/api/memberships/${id}`, { method: "DELETE" });
      setMembers((prev) => prev.filter((m) => m._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch("/api/memberships");
        const data = await res.json();
        setMembers(data.filter((m: Member) => m.joinAs === "Member"));
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-32">
        <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">
        Gym Members
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 shadow-lg hover:shadow-green-500/30 transition"
          >
            {/* ✅ ROLE TAG */}
            <span className="text-xs bg-blue-600 px-3 py-1 rounded-full">
              {member.joinAs}
            </span>

            <h2 className="text-green-400 text-xl font-semibold mt-3">
              {member.name}
            </h2>

            <p className="text-gray-300">Email: {member.email}</p>
            <p className="text-gray-300">Program: {member.program}</p>
            <p className="text-gray-300">Plan: {member.plans}</p>

            {/* ✅ STATUS BADGE */}
            <div
              className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold ${
                getStatus(member.endDate) === "Membership Active"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {getStatus(member.endDate)}
            </div>

            {/* ✅ DELETE + EDIT */}
            <div className="flex gap-4 mt-5">
              <button
                onClick={() => handleDelete(member._id)}
                className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 py-2 rounded-lg font-semibold text-white shadow-md transition flex items-center justify-center gap-2"
              >
                🗑️ Delete
              </button>

              <button
                onClick={() => router.push(`/new-registry?id=${member._id}`)}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-200 py-2 rounded-lg font-semibold text-black shadow-md transition flex items-center justify-center gap-2"
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

export default MembersPage;
