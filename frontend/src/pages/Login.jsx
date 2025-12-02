import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // Save token
      localStorage.setItem("token", data.token);

      alert("Login successful! Redirecting...");
      // Tell navbar login happened
      window.dispatchEvent(new Event("authChanged"));

      // Redirect to home page
      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <>
      <section className="bg-customBlue dark:bg-customBlue rounded-lg min-h-[80dvh] flex items-center justify-center mb-14 py-16 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center bg-card rounded-lg shadow-md overflow-hidden w-full max-w-4xl">

          <div className="hidden md:block md:w-1/2 bg-cover bg-center">
            <img src="login.svg" alt="login" />
          </div>

          <div className="w-full md:w-1/2 p-6 sm:p-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              👋 Welcome Back!
            </h1>

            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-sm">Your Email</label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">Password</label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg p-2.5"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Don’t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Register here
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
