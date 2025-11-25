const Hero = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-center text-white px-4">
      <div>
        <h1 className="text-7xl font-bold drop-shadow-lg">
          Welcome to <span className="text-green-400">FitZone</span> Gym
        </h1>
        <p className="mt-4 text-lg font-medium drop-shadow-md">
          Strength, endurance, and wellness start here.
        </p>
      </div>
    </div>
  );
};

export default Hero;
