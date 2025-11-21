"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting FitZone! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-900 text-white w-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-500">Contact Us</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Have questions or want to kickstart your fitness journey? 
            Reach out — our team is ready to help you reach your goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-md flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-green-400 mb-6">Get in Touch</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  📍 <span className="font-medium text-white">Address:</span> 
                  123 FitZone Street, Kolkata, West Bengal, India
                </p>
                <p>
                  📞 <span className="font-medium text-white">Phone:</span>{" "}
                  <a href="tel:+919876543210" className="text-green-400 hover:underline">
                    +91 98765 43210
                  </a>
                </p>
                <p>
                  ✉️ <span className="font-medium text-white">Email:</span>{" "}
                  <a href="mailto:info@fitzonegym.com" className="text-green-400 hover:underline">
                    info@fitzonegym.com
                  </a>
                </p>
                <p>
                  🕒 <span className="font-medium text-white">Working Hours:</span> <br />
                  Mon - Sat: 5:00 AM – 10:00 PM <br />
                  Sun: 7:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                className="w-full h-64 rounded-xl border-2 border-zinc-700"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.917676651315!2d88.36389527506374!3d22.51811203501688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02713d292f8dd3%3A0xa0f66ab86fd68cf!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1696550000000"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-800 p-8 rounded-2xl border border-zinc-700 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-6">
              Send Us a Message
            </h3>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 text-white border border-zinc-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 text-white border border-zinc-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-zinc-900 text-white border border-zinc-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 outline-none resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
