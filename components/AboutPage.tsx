import Image from "next/image";

const AboutPage = () => {
  const features = [
    {
      title: "Expert Trainers",
      image:
        "https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwdHJhaW5lcnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "Get trained by certified professionals who design customized fitness plans tailored to your goals.",
    },
    {
      title: "Modern Equipment",
      image:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZXF1aXBtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
      description:
        "Our gym is equipped with state-of-the-art machines, free weights, and functional training areas.",
    },
    {
      title: "Wellness Programs",
      image:
        "https://images.unsplash.com/photo-1666979290090-dde24b4614bb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwd2VsbG5lc3N8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=600",
      description:
        "Improve your overall wellbeing with yoga, pilates, mindfulness, and nutrition programs.",
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
            At <span className="text-green-400 font-semibold">FitZone Gym</span>,
            we&apos;re dedicated to transforming your fitness journey. From
            cutting-edge training equipment to personalized programs, our mission
            is to help you build strength, confidence, and a healthy lifestyle.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <div className="relative w-full h-52 mb-5 rounded-xl overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-green-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="#membership"
            className="px-8 py-3 bg-green-500 text-black rounded-full font-semibold hover:bg-green-600 transition"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
