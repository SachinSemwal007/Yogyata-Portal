import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hiringManager, setHiringManager] = useState("");
  const [branchLocation, setBranchLocation] = useState("");
  const [address, setAddress] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [isOrgId, setIsOrgId] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [loading, setLoading] = useState(false);

  const checkPasswordStrength = (pwd) => {
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongPasswordRegex.test(pwd)) return "Strong";
    if (mediumPasswordRegex.test(pwd)) return "Medium";
    return "Weak";
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(checkPasswordStrength(pwd));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((s) => !s);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      // Send all fields. Backend will only persist fields it supports.
      const payload = {
        name: companyName,
        email,
        password,
        phoneNumber,
        hiringManager,
        branchLocation,
        address,
        organizationId: isOrgId ? organizationId : null,
      };

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        setLoading(false);
        return;
      }

      alert("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 900);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="bg-customBlue dark:bg-customBlue rounded-lg min-h-screen flex items-center justify-center mb-14 py-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-card rounded-lg shadow-md overflow-hidden w-full max-w-4xl">
          <div className="hidden md:block md:w-1/2 bg-cover bg-center">
            <img src="register.svg" alt="register" />
          </div>

          <div className="w-full md:w-1/2 px-4 py-6 sm:py-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 mr-4 text-center">
              📃 Create an Account
            </h1>

            <div className="overflow-y-auto mb-5" style={{ maxHeight: "60vh" }}>
              <form className="space-y-4 p-4" onSubmit={handleRegister}>
                {/* Company Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Hiring Manager */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hiring Manager
                  </label>
                  <input
                    type="text"
                    placeholder="Enter hiring manager's name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={hiringManager}
                    onChange={(e) => setHiringManager(e.target.value)}
                    required
                  />
                </div>

                {/* Branch Location */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Branch Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter branch location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={branchLocation}
                    onChange={(e) => setBranchLocation(e.target.value)}
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Address
                  </label>
                  <textarea
                    placeholder="Enter address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>

                {/* Organization ID (radio + conditional input) */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Do you have an Organization ID?
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="org"
                        value="yes"
                        onChange={() => setIsOrgId(true)}
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="org"
                        value="no"
                        onChange={() => {
                          setIsOrgId(false);
                          setOrganizationId("");
                        }}
                        defaultChecked
                      />
                      <span>No</span>
                    </label>
                  </div>

                  {isOrgId && (
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="Enter organization ID"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                        value={organizationId}
                        onChange={(e) => setOrganizationId(e.target.value)}
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                  <p
                    className={`text-sm mt-1 ${
                      passwordStrength === "Strong"
                        ? "text-green-600"
                        : passwordStrength === "Medium"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {passwordStrength && `Password Strength: ${passwordStrength}`}
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Terms */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600">
                      Terms & Conditions
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Login here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
