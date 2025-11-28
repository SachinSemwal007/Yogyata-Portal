import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-background px-4 sm:px-6 md:px-12 lg:px-16 min-w-[360px]">
      <div className="py-4 lg:py-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
          {/* Grid Section */}
          <div className="flex flex-wrap justify-between w-full gap-12 text-sm">
            {/* Product Section */}
            <div>
              <h2 className="mb-4 font-semibold opacity-90 uppercase">
                Product
              </h2>
              <ul className="opacity-60 font-medium flex flex-col gap-1">
                <li>
                  <Link to="/pricing" className="hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/overview" className="hover:underline">
                    Overview
                  </Link>
                </li>
              </ul>
            </div>
            {/* Resources Section */}
            <div>
              <h2 className="mb-4 font-semibold opacity-90 uppercase">
                Resources
              </h2>
              <ul className="opacity-60 font-medium flex flex-col gap-1">
                <li>
                  <Link to="/media-kit" className="hover:underline">
                    Media Kit
                  </Link>
                </li>
                <li>
                  <Link to="/guides-tutorials" className="hover:underline">
                    Guides & Tutorials
                  </Link>
                </li>
                <li>
                  <Link to="/customer-stories" className="hover:underline">
                    Customer Stories
                  </Link>
                </li>
              </ul>
            </div>
            {/* Company Section */}
            <div>
              <h2 className="mb-4 font-semibold opacity-90 uppercase">
                Company
              </h2>
              <ul className="opacity-60 font-medium flex flex-col gap-1">
                <li>
                  <Link to="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:underline">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/help-center" className="hover:underline">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
            {/* Legal Section */}
            <div>
              <h2 className="mb-4 font-semibold opacity-90 uppercase">Legal</h2>
              <ul className="opacity-60 font-medium flex flex-col gap-1">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            {/* Follow Us Section */}
            <div className="flex flex-col pr-6">
              <h2 className="mb-4 text-sm font-semibold opacity-90 uppercase">
                Follow Us
              </h2>
              <div className="flex items-center gap-4 text-foreground/60">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  <FaTwitter size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  <FaGithub size={22} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="/"
                  className="hover:text-foreground"
                  aria-label="Website"
                >
                  <FaGlobe size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-12 text-center text-xs text-foreground/60 border-t border-foreground/20 pt-4">
          © {new Date().getFullYear()} Yogyata Portal™. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
