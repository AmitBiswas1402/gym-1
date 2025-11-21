import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1470"
          alt="Gym background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/65 to-black/90"></div>
      </div>

      {/* Centered hero text */}
      <div className="flex items-center justify-center h-full text-white text-center px-4">
        <div>
          <h1 className="text-7xl font-bold drop-shadow-lg">
            Welcome to <span className="text-green-400">FitZone</span> Gym
          </h1>
          <p className="mt-4 text-lg font-medium drop-shadow-md">
            Strength, endurance, and wellness start here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;