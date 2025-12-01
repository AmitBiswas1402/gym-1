import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const features = [
    {
      title: "Expert Trainers",
      image:
        "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?auto=format&fit=crop&q=60&w=600",
      description:
        "Get trained by certified professionals who design customized fitness plans tailored to your goals.",
      link: "/trainers",
    },
    {
      title: "Modern Equipment",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=60&w=600",
      description:
        "Our gym is equipped with state-of-the-art machines, free weights, and functional training areas.",
      link: "/equipments",
    },
    {
      title: "Wellness Programs",
      image:
        "https://images.unsplash.com/photo-1666979290090-dde24b4614bb?auto=format&fit=crop&q=60&w=600",
      description:
        "Improve your overall wellbeing with yoga, pilates, mindfulness, and nutrition programs.",
      link: "/wellness",
    },
  ];

  return (
    <div id="about" className="py-20 text-white w-full">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-green-400">About Us</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            At <span className="text-green-400 font-semibold">FitZone Gym</span>
            , we&apos;re dedicated to transforming your fitness journey. From
            cutting-edge training equipment to personalized programs, our
            mission is to help you build strength, confidence, and a healthy
            lifestyle.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Link
              href={f.link}
              key={i}
              className="rounded-2xl overflow-hidden border border-gray-700 bg-black/40 shadow-lg backdrop-blur-md hover:scale-105 hover:shadow-green-400/30 hover:border-green-500 transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={f.image}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-semibold text-green-300">
                  {f.title}
                </h3>
                <p className="text-gray-300 mt-2">{f.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/new-registry"
            className="px-8 py-3 bg-green-500 text-black rounded-full font-semibold hover:bg-green-600 transition"
          >
            Join Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
