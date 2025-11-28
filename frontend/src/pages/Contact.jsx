import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function ContactUs2() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-background">
      <div className="flex flex-col md:flex-row w-full max-w-6xl h-auto shadow-lg rounded-2xl bg-white overflow-hidden">
        {/* Left Panel */}
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 p-8 md:p-12 md:border-r-4 border-[#043873] bg-card/95">
          <div className="flex flex-row items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold text-foreground/70">
              Contact Us
            </h1>
          </div>
          <div className="mb-6">
            <p className="text-sm md:text-base text-foreground">
              Tell us your problem! How can we help?
            </p>
          </div>
          {/* Form Fields */}
          <form className="flex flex-col gap-4 w-full">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground/90"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full h-12 px-4 mt-2 border-2 text-input border-[#1b7df1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b7df1]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground/90"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-4 mt-2 border-2 text-input border-[#1b7df1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b7df1]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/90"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full h-28 px-4 mt-2 border-2 text-input border-[#1b7df1] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1b7df1]"
              />
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-[#1b7df1] text-white rounded-lg hover:bg-[#043873] transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Panel */}
        <div className="relative hidden md:flex flex-col justify-center items-center w-full md:w-1/2 bg-[#043873] text-white p-12">
          <h2 className="text-3xl font-bold text-center mb-4">Get in touch</h2>
          <p className="text-base text-center mb-8">
            Reach out to us anytime. We are available 24/7 to address your concerns and queries.
          </p>
          <img
            src="/contact.png"
            alt="Support"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-h-[300px] object-contain mx-auto"
          />

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">545 Mavis Island, IL 99191</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">+2034 4040 3030</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">hello@gmail.com</p>
            </div>
          </div>

          {/* Social Media Icons Box (Positioned on the right border) */}
          <div className="absolute right-0 p-3 flex flex-col justify-center items-center gap-4 bg-blue-100 shadow-lg rounded-l-3xl">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Mobile Version (Stacked) */}
        <div className="md:hidden flex flex-col w-full bg-[#043873] text-white p-8">
          <h2 className="text-3xl font-bold text-center mb-4">Get in touch</h2>
          <p className="text-base text-center mb-8">
            Reach out to us anytime. We are available 24/7 to address your concerns and queries.
          </p>
          <img
            src="/contact.png"
            alt="Support"
            className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 max-h-[300px] object-contain mx-auto"
          />

          {/* Contact Info */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">545 Mavis Island, IL 99191</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">+2034 4040 3030</p>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <FaEnvelope className="text-blue-600 w-6 h-6" />
              <p className="text-sm font-poppins font-medium">hello@gmail.com</p>
            </div>
          </div>

          {/* Social Media Icons Box */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
