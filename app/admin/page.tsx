"use client";

import { useState, useEffect } from "react";
import MembersPage from "@/app/admin/members/page";
import TrainersPage from "@/app/admin/trainers/page";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import Image from "next/image";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<"members" | "trainers">("members");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="relative min-h-screen text-white p-10 hide-scrollbar overflow-y-auto">
      {/* ✅ FULL BACKGROUND IMAGE */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470"
          alt="Gym background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✅ BACK BUTTON */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-6 left-6 flex items-center gap-3 text-xl font-semibold text-gray-200 hover:text-green-400 transition group"
      >
        <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 group-hover:bg-green-500 text-white text-2xl transition">
          <MoveLeft />
        </span>
        <span className="hidden sm:block">Back to Home</span>
      </button>

      {/* ✅ HEADER */}
      <h1 className="text-4xl font-bold text-center text-green-400 mb-10">
        Admin Dashboard
      </h1>

      {/* ✅ TAB BUTTONS */}
      <div className="flex justify-center gap-6 mb-12">
        <button
          onClick={() => setActiveTab("members")}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition ${
            activeTab === "members"
              ? "bg-green-600 text-white"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          🏋️‍♂️ Members
        </button>

        <button
          onClick={() => setActiveTab("trainers")}
          className={`px-8 py-4 rounded-xl font-semibold text-lg transition ${
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
