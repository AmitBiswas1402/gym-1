"use client";

import { useState } from "react";
import MembersPage from "@/app/admin/members/page";
import TrainersPage from "@/app/admin/trainers/page";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<"members" | "trainers">("members");

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">
      
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
          🏋️‍♂️Members
        </button>

        <button
          onClick={() => setActiveTab("trainers")}
          className={`px-6 py-3 w-100 rounded-lg font-semibold transition ${
            activeTab === "trainers"
              ? "bg-purple-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          💪🏼Trainers
        </button>
      </div>

      {/* ✅ CONDITIONAL RENDERING */}
      <div className="max-w-7xl mx-auto">
        {activeTab === "members" && <MembersPage />}
        {activeTab === "trainers" && <TrainersPage />}
      </div>

    </div>
  );
};

export default AdminPage;
