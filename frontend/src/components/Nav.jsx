import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { ModeToggle } from "./ThemeToggle";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

useEffect(() => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  checkAuth(); // run on mount

  // listen to custom event
  window.addEventListener("authChanged", checkAuth);

  return () => {
    window.removeEventListener("authChanged", checkAuth);
  };
}, []);



const handleLogout = () => {
  localStorage.removeItem("token");

  // notify navbar immediately
  window.dispatchEvent(new Event("authChanged"));

  navigate("/login");
};

  // const logoutHandler = () => {
  //   // Add logout functionality (e.g., clear session or token)
  //   alert("Logged out successfully!");
  // };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[99] h-20 bg-background/50 backdrop-blur-md px-4 sm:px-6 md:px-[5vw] lg:px-[7vw] min-w-[360px]">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 w-full h-full">
        <div>
          {/* Logo Section */}
          <Link to="/" className="flex items-center justify-center gap-2">
            <div className="flex relative items-center justify-center rounded-full border-primary gap-2">
              <img src="logo.png" className="h-8" alt="Logo" />
              <p className="leading-none text-nowrap font-zian">
                Yogyata Portal
              </p>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-4 xmd:hidden">
          {/* Menu Button for Small Screens */}
          <button
            className="flex justify-center items-center p-1.5 w-10 h-10"
            onClick={toggleDropdown}
          >
            <LuMenu size={"2rem"} />
          </button>
          <ModeToggle />
        </div>

        {/* Mobile Menu */}
        {isDropdownOpen && (
          <div className="right-0 top-0 fixed items-center flex flex-col min-h-screen gap-6 w-[260px] px-4 xmd:hidden bg-background z-[998] drop-shadow-xmd">
            <button onClick={toggleDropdown} className="absolute top-6 right-6">
              <IoClose size={"2rem"} />
            </button>
            <div className="">
              <div className="flex flex-col justify-center items-start font-medium p-4 xmd:flex-row gap-6 mt-16">
                {/* Home, About Us, Pricing, Contact Us */}

                <NavLink to="/" className="">
                  Home
                </NavLink>

                <NavLink to="/candidate-form" className="">
                  About Us
                </NavLink>

                <NavLink to="/pricing" className="">
                  Pricing
                </NavLink>

                <NavLink to="/contact" className="">
                  Contact Us
                </NavLink>
              </div>
            </div>
            {/* Login & Signup Buttons */}
            <div className="flex justify-center items-center gap-2">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="inline-block py-2 px-4 text-red-600 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button className="xmd:ml-auto">
                    <Link
                      to="/login"
                      className="inline-block py-2 px-4 text-[#043873] bg-[#FFE492] hover:bg-yellow-400 rounded-lg font-semibold"
                    >
                      Login
                    </Link>
                  </button>
                  <button>
                    <Link
                      to="/register"
                      className="inline-block py-2 px-4 text-white bg-[#4f9cf9] hover:bg-blue-700 rounded-lg font-semibold"
                    >
                      Signup
                    </Link>
                  </button>
                </>
              )}

              {/* Logout Button
            <li>
              <Link
                to="#"
                onClick={logoutHandler}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xmd:hover:bg-transparent xmd:border-0 xmd:hover:text-red-700 xmd:p-0 dark:text-white xmd:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white xmd:dark:hover:bg-transparent"
              >
                Logout
              </Link>
            </li> */}
            </div>
          </div>
        )}

        {/* Navbar Items */}
        <div
          className={`w-fit hidden xmd:flex gap-4 justify-center items-center`}
          id="navbar-multi-level"
        >
          {/* Home, About Us, Pricing, Contact Us */}
          <ul className="flex flex-col justify-center items-center font-medium mr-4 xmd:flex-row gap-6">
            <li>
              <NavLink to="/" className="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="">
                Contact Us
              </NavLink>
            </li>
          </ul>
          {/* Login & Signup Buttons */}
          <div className="flex justify-center items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="inline-block py-2 px-4 text-red-600 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold"
              >
                Logout
              </button>
            ) : (
              <>
                <button className="xmd:ml-auto">
                  <Link
                    to="/login"
                    className="inline-block py-2 px-4 text-[#043873] bg-[#FFE492] hover:bg-yellow-400 rounded-lg font-semibold"
                  >
                    Login
                  </Link>
                </button>
                <button>
                  <Link
                    to="/register"
                    className="inline-block py-2 px-4 text-white bg-[#4f9cf9] hover:bg-blue-700 rounded-lg font-semibold"
                  >
                    Signup
                  </Link>
                </button>
              </>
            )}

            {/* Logout Button
            <li>
              <Link
                to="#"
                onClick={logoutHandler}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 xmd:hover:bg-transparent xmd:border-0 xmd:hover:text-red-700 xmd:p-0 dark:text-white xmd:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white xmd:dark:hover:bg-transparent"
              >
                Logout
              </Link>
            </li> */}
          </div>
          {/* Theme Button */}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
