import HeroSection from "../components/HeroSection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import AboutUs from "./AboutUs.jsx";
import Pricing from "./Pricing.jsx";

const Home = () => {
  return (
    <>
     <div className="pt-20">
      <HeroSection />
      <AboutUs />

      <section>
        <div className="relative flex flex-col items-center w-full h-auto px-6 sm:px-12 lg:px-20 py-12 bg-[rgba(4,56,115,1)]">
          {/* Background Image */}
          <img
            className="absolute inset-0 object-left w-full h-full object-contain opacity-30 z-0"
            src="BACKGROUND.png"
            alt="Background"
          />

          {/* Main Content */}
          <div className="relative flex flex-col items-center gap-10 w-full z-10">
            {/* Text and Banner Section */}
            <div className="flex flex-col items-center text-center gap-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug tracking-tight">
                Your work, everywhere you are
              </h1>
              <img
                src="blueline.svg"
                alt="Decorative Line"
                className="w-36 sm:w-44 h-auto"
              />
              <p className="text-base sm:text-lg text-white leading-relaxed tracking-tight max-w-2xl">
                Access your account from your computer, phone, or tablet by
                synchronizing with Yogyata Portal. A terminal app is also
                available for developers and advanced users!
              </p>
            </div>
            {/* Button Section */}
            <div className="flex justify-center">
              <button className="flex items-center gap-2 px-8 py-3 rounded-lg bg-[rgba(79,156,249,1)] hover:bg-[rgba(70,140,230,1)] transition duration-300">
                <span className="text-lg font-medium text-white tracking-tight">
                  Try Now
                </span>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/672et2dkqeq-2110%3A530?alt=media&token=02099407-2ca6-4d44-aaec-432240aff081"
                  alt="Arrow Icon"
                  className="w-5 h-5"
                />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      {/* App */}
      <section className="relative flex flex-col lg:flex-row justify-center items-center px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16 bg-primary text-white overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          src="Element.png"
          alt="Background"
        />

        {/* Left Image */}
        <div className="relative flex justify-center items-center lg:w-1/2 w-full z-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qyl1gd4fnf-2110%3A290?alt=media&token=fc421fef-fd12-423d-8004-b5b019c34842"
            alt="Illustration of apps integration"
            className="w-3/4 lg:w-full h-auto max-w-sm"
          />
        </div>

        {/* Right Content */}
        <div className="relative flex flex-col justify-center items-start gap-8 lg:w-1/2 w-full mt-8 lg:mt-0 px-4 z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
            Find your suitable role via your favorite apps using Yogyata Portal.
          </h2>
          <p className="text-lg sm:text-xl font-normal leading-relaxed">
            Yogyata teams up with your favorite sites. Integrate with over 100+
            tools to have all the resources you need to find your dream job.
            It&apos;s simple, fast, and designed to make your job search
            seamless.
          </p>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[rgba(79,156,249,1)] hover:bg-[rgba(70,140,230,1)] transition duration-300">
            <span className="text-lg font-semibold">Get Started</span>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qyl1gd4fnf-2110%3A373?alt=media&token=4cca3529-1a0f-435e-88ee-c171d656cff1"
              alt="Arrow Icon"
              className="w-5 h-5"
            />
          </button>
        </div>
      </section>

      {/* Your Data */}
      <section className="flex flex-col lg:flex-row justify-between items-center w-full px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16 ">
        <div className="flex flex-col justify-start items-start gap-6 lg:w-1/2 w-full">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground/90 leading-tight">
            100% your data is secure.
          </h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/6eqborjwhna-2110%3A380?alt=media&token=8d5896f9-e9b5-44ad-9c93-c54b914785ad"
            alt="Secure data visual"
            className="mt-2 w-48 h-auto"
          />
          <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed">
            We use End-to-End Encryption (E2EE) to secure your personal data and
            ensure no one but yourself can access them. Your privacy and
            security are our highest priorities.
          </p>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/6eqborjwhna-2110%3A411?alt=media&token=07243081-26ba-4a9f-9ea7-cd76852e7250"
            alt="Data security illustration"
            className="w-3/4 lg:w-full h-auto max-w-lg"
          />
        </div>
      </section>

      {/* Contact Us */}
      <section>
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 w-full h-auto px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16 bg-[rgba(4,56,115,1)]">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            src="Element.png"
            alt="Background"
          />

          {/* Left Section */}
          <div className="flex flex-col justify-start items-start gap-4 w-full md:w-1/2 z-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-white leading-tight tracking-tight">
              If you have any doubt?
            </h2>
            <p className="text-lg sm:text-xl font-inter font-medium text-white leading-relaxed">
              You can contact us by clicking &apos;Contact Us&apos; for any
              issue.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center md:justify-end items-center w-full md:w-auto z-10">
            <a
              href="/contact"
              className="flex items-center gap-3 px-8 py-4 rounded-lg bg-[rgba(79,156,249,1)] hover:bg-[rgba(70,140,230,1)] transition duration-300"
            >
              <p className="text-lg font-semibold text-white">Contact Us</p>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/g6dooyvev5n-2110%3A124?alt=media&token=73d28ec6-5045-4c6f-8fff-1b42500508a5"
                alt="Arrow Icon"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
      {/* Try Now */}
      <section>
        <div className="relative flex flex-col justify-center items-center gap-16 w-full h-auto px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px] py-16 bg-[rgba(4,56,115,1)]">
          {/* Background Image */}
          <img
            className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
            src="Element.png"
            alt="Background"
          />
          <div className="flex flex-col justify-start items-center gap-6 w-full z-10">
            {/* Title and Subheading */}
            <p className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold text-center text-white leading-tight tracking-tight">
              Try Yogyata Portal today
            </p>
            <p className="text-xl sm:text-2xl font-inter font-medium text-center text-white leading-relaxed tracking-tight">
              Get started
            </p>
          </div>

          {/* "Try Now" Button */}
          <div className="flex items-center gap-3 px-8 py-4 rounded-lg bg-[rgba(79,156,249,1)] cursor-pointer hover:bg-[rgba(70,140,230,1)] transition duration-300 z-10">
            <p className="text-lg font-semibold text-white">Try Now</p>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/g6dooyvev5n-2110%3A124?alt=media&token=73d28ec6-5045-4c6f-8fff-1b42500508a5"
              alt="Arrow Icon"
              className="w-6 h-6"
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;
