"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const editId = searchParams.get("id"); 

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    programs: "None",
    startDate: "",
    endDate: "",
    plans: "None",
    joinAs: "Member",
  });

  useEffect(() => {
    if (!editId) return;

    const fetchSingleMember = async () => {
      const res = await fetch("/api/memberships");
      const data = await res.json();

      const user = data.find((u: any) => u._id === editId);
      if (user) setFormData(user);
    };

    fetchSingleMember();
  }, [editId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const method = editId ? "PATCH" : "POST";
      const url = editId
        ? `/api/memberships/${editId}`
        : "/api/memberships";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Action failed");

      alert(editId ? "✅ Member updated!" : "✅ Member registered!");
      router.push("/admin");
    } catch (error) {
      alert("❌ Error saving member!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl text-white shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">
          {editId ? "Update Member" : "Register Member"}
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
          required
        />

        {/* Start Date */}
        <label className="block mb-1 font-semibold">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
          required
        />

        {/* End Date */}
        <label className="block mb-1 font-semibold">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
          required
        />

        {/* Program */}
        <label className="block mb-2 font-semibold">Choose Program</label>
        <select
          name="programs"
          value={formData.programs}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        >
          <option value="None">None</option>
          <option value="Strength Training">Strength Training</option>
          <option value="Cardio Blast">Cardio Blast</option>
          <option value="Yoga & Flexibility">Yoga & Flexibility</option>
          <option value="HIIT Power">HIIT Power</option>
        </select>

        {/* Plans */}
        <label className="block mb-2 font-semibold">Choose Plans</label>
        <select
          name="plans"
          value={formData.plans}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        >
          <option value="None">Select Plan</option>
          <option value="One Day Pass">One Day Pass (₹299)</option>
          <option value="Monthly Membership">Monthly Membership (₹2,499)</option>
          <option value="Annual Membership">Annual Membership (₹19,999)</option>
        </select>

        {/* Join As */}
        <label className="block mb-2 font-semibold">Join As</label>
        <select
          name="joinAs"
          value={formData.joinAs}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        >
          <option value="Member">Member</option>
          <option value="Trainer">Trainer</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 p-2 rounded font-semibold hover:bg-green-500"
        >
          {editId ? "Update the Person" : "Register"}
        </button>
      </form>
    </div>
  );
}
