"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import ProgramPage from "@/components/ProgramPage";
import MembershipPage from "@/components/MembershipPage";
import Hero from "@/components/Hero";
import ContactPage from "@/components/ContactPage";
import Image from "next/image";

const GymHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <div className="fixed inset-0 -z-20">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470"
          alt="Gym background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* Hero */}
      <section>
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="min-h-screen flex items-center justify-center">
        <AboutPage />
      </section>

      {/* Programs */}
      <section id="programs" className="min-h-screen flex items-center justify-center">
        <ProgramPage />
      </section>

      {/* Membership */}
      <section id="membership" className="min-h-screen flex items-center justify-center">
        <MembershipPage />
      </section>

      {/* Contact */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <ContactPage />
      </section>
    </div>
  );
};

export default GymHome;
