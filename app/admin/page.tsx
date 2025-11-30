"use client";

import { useState, useEffect } from "react";
import MembersPage from "@/app/admin/members/page";
import TrainersPage from "@/app/admin/trainers/page";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<"members" | "trainers">("members");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10 relative">
      {/* ✅ BACK TO HOME BUTTON */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-3 text-xl font-semibold text-gray-200 hover:text-green-400 transition group"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 group-hover:bg-green-500 text-white text-2xl transition">
          <MoveLeft />
        </span>
        <span className="hidden sm:block">Back to Home</span>
      </button>

      {/* ✅ ADMIN HEADER */}
      <h1 className="text-4xl font-bold text-center text-green-400 mb-10">
        Admin Dashboard
      </h1>

      {/* ✅ TAB BUTTONS */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab("members")}
          className={`px-6 py-3 w-100 rounded-lg font-semibold transition ${
            activeTab === "members"
              ? "bg-green-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          🏋️‍♂️ Members
        </button>

        <button
          onClick={() => setActiveTab("trainers")}
          className={`px-6 py-3 w-100 rounded-lg font-semibold transition ${
            activeTab === "trainers"
              ? "bg-purple-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          💪🏼 Trainers
        </button>
      </div>

      {/* ✅ LOADING STATE */}
      {loading ? (
        <div className="flex flex-col justify-center items-center py-32 text-gray-300">
          <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-lg font-semibold">Loading {activeTab}...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {activeTab === "members" && <MembersPage />}
          {activeTab === "trainers" && <TrainersPage />}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
