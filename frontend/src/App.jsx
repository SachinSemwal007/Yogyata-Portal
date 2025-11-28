import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import CandidateForm from "./pages/CandidateForm";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/Theme-Provider";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import PreviewVacancy from "./components/PreviewVacancy";
import PreviewCandidate from "./components/PreviewCandidate";

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard");

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {!isDashboard && <Nav />}
      <div className={"h-[5rem]"}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/candidate-form" element={<CandidateForm />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/preview-vacancy" element={<PreviewVacancy />} />
        <Route path="/preview-candidate" element={<PreviewCandidate/>}/>
      </Routes>
      {!isDashboard && <Footer />}
    </ThemeProvider>
  );
};

export default App;
