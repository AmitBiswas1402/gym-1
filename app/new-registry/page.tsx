"use client";
import { useState, ChangeEvent } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    password: "",
    program: "None",
    startDate: "",
    endDate: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value as ProgramOption });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/memberships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to register");

      alert("Member successfully registered!");
    } catch (error) {
      alert("Error adding member!");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-800 p-6 rounded-xl text-white shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Register</h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />

        {/* Start Date */}
        <label className="block mb-1 font-semibold">Start Date</label>
        <input
          type="date"
          name="startDate"
          onChange={handleChange}
          className="w-full mb-3 p-2 rounded bg-gray-700"
        />

        {/* End Date */}
        <label className="block mb-1 font-semibold">End Date</label>
        <input
          type="date"
          name="endDate"
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        />

        {/* Program Dropdown */}
        <label className="block mb-2 font-semibold">Choose Program</label>
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="w-full mb-4 p-2 rounded bg-gray-700"
        >
          <option value="None">None</option>
          <option value="Strength Training">Strength Training</option>
          <option value="Cardio Blast">Cardio Blast</option>
          <option value="Yoga & Flexibility">Yoga & Flexibility</option>
          <option value="HIIT Power">HIIT Power</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 p-2 rounded font-semibold hover:bg-green-500 cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
}
