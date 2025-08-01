import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center h-full px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Empowering the Future with Clean Energy
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-6">
          Join us on the journey to a greener, cleaner tomorrow with innovative energy solutions.
        </p>
        
      </div>
    </section>
  );
};

export default Hero;
