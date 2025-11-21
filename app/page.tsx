"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import ProgramPage from "@/components/ProgramPage";
import MembershipPage from "@/components/MembershipPage";
import Hero from "@/components/Hero";
import ContactPage from "@/components/ContactPage";

const GymHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position to toggle navbar blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/30 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <AboutPage />
      </section>

      {/* Programs Section */}
      <section
        id="programs"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <ProgramPage />
      </section>

      {/* Membership Section */}
      <section
        id="membership"
        className="min-h-screen bg-white flex items-center justify-center"
      >
        <MembershipPage />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <ContactPage />
      </section>
    </div>
  );
};

export default GymHome;
