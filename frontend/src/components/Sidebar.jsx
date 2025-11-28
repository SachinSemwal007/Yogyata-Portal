import {
  FcHome,
  FcAddDatabase,
  FcInfo,
  FcAddressBook,
  FcGraduationCap,
  FcDoughnutChart,
} from "react-icons/fc";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "../assets/assets";

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="h-[100dvh] bg-background p-4 xmd:py-8 xmd:px-6 drop-shadow-md flex flex-col gap-6 relative z-[999]">
      <div className="flex relative items-center justify-center gap-2">
        <img src={Logo} className="h-8" alt="Logo" />
        <p className="leading-none text-nowrap font-zian hidden xmd:block">
          Yogyata Portal
        </p>
      </div>

      <div className="w-full h-full flex flex-col gap-2 py-8">
        {[
          { to: "/dashboard", icon: <FcHome size={"1.3rem"} />, label: "Home" },
          {
            to: "/dashboard/vacancy-form",
            icon: <FcAddDatabase size={"1.3rem"} />,
            label: "Create Vacancy",
          },
          {
            to: "/dashboard/vacancy-details",
            icon: <FcInfo size={"1.3rem"} />,
            label: "Vacancy Details",
          },
          {
            to: "/dashboard/applications",
            icon: <FcAddressBook size={"1.3rem"} />,
            label: "Applications",
          },
          {
            to: "/dashboard/examination",
            icon: <FcGraduationCap size={"1.3rem"} />,
            label: "Examination",
          },
          {
            to: "/dashboard/result",
            icon: <FcDoughnutChart size={"1.3rem"} />,
            label: "Result",
          },
        ].map(({ to, icon, label }) => (
          <Link
            key={to}
            to={to}
            className={`flex justify-center xmd:justify-start items-center gap-4 px-4 py-3 rounded-md transition-all duration-200 
              ${
                location.pathname === to
                  ? "bg-primary text-white"
                  : "hover:bg-foreground/10"
              }`}
          >
            {icon}
            <p className="text-nowrap xmd:block hidden">{label}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
