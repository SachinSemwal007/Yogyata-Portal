import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex flex-col relative py-6 sm:py-12 md:flex-row items-center justify-between sm:h-[90dvh] px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px]">
      {/* Background Image */}
      <div className="absolute bg-hero-pattern hidden md:block top-0 left-0 right-0 opacity-70 bg-cover object-cover inset-0 -z-[99]"></div>

      <div className="w-full h-full flex flex-col md:flex-row justify-between items-center gap-4 z-[1]">
        {/* Left Section */}
        <div className="flex flex-col gap-6 md:gap-10 items-start justify-start z-10">
          {/* Text Section */}
          <div className="text-left">
            <h1 className="text-4xl md:text-[4vw] lg:text-5xl font-bold leading-tight">
              Get AI Assisted Employment
              <br />
              <span className="text-4xl md:text-[3.5vw] lg:text-4xl font-semibold">
                for your Dream Roles
              </span>
            </h1>
            <p className="text-sm md:text-base mt-4 max-w-sm lg:max-w-md">
              Provide organizations with tested and certified candidates who fit
              their job roles seamlessly using artificial intelligence
              solutions.
            </p>
          </div>

          {/* Button Section */}
          <button className="bg-[#4f9cf9] hover:bg-blue-700 text-white text-sm md:text-base font-semibold py-3 px-6 rounded-lg flex items-center gap-2">
            Get Started Now <FaArrowRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="max-w-[500px] p-4 rounded w-full z-10 mt-10 md:mt-0">
          <img
            className="w-full h-auto rounded"
            src="hero.svg"
            alt="Animation"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
