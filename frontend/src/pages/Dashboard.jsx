import Sidebar from "../components/Sidebar";
import { Routes, Route, useLocation } from "react-router-dom";
import VacancyForm from "./VacancyForm";
import { ModeToggle } from "../components/ThemeToggle";
import DashboardHome from "../components/DashboardHome";
import { PiBellRinging } from "react-icons/pi";
import { FcManager } from "react-icons/fc";
import NotificationPanel from "../components/NotificationPanel";
import { useState } from "react";
import VacancyDetails from "../components/VacancyDetails";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ShortlistApplication from "../components/ShortlistApplication";
import PreviewVacancy from "../components/PreviewVacancy";
import { Link } from "react-router-dom";
import ProfileSettings from "../components/ProfileSettings";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const location = useLocation();
  const [openNotification, setOpenNotification] = useState(false);

  const pathname = location.pathname
    .split("/") // Split the pathname into an array
    .filter(Boolean) // Remove empty strings
    .pop(); // Get the last segment of the path
  return (
    <div className="bg-background h-full w-full absolute top-0 right-0 left-0 min-w-[400px] max-h-[100dvh] overflow-hidden">
      <div className="flex justify-center items-start w-full">
        <Sidebar />
        <div className="h-full w-full">
          <div className="bg-background p-6 drop-shadow-md relative z-[999]">
            <div className="flex justify-between items-center gap-8 w-full">
              <p className="capitalize tracking-wide line-clamp-1">
                {pathname ? pathname.replace("-", " ") : "Dashboard"}
              </p>
              <div className="flex justify-center items-center relative gap-6 mr-4">
                <button onClick={() => setOpenNotification(!openNotification)}>
                  <PiBellRinging size={"1.5rem"} />
                </button>
                <button className="flex justify-center items-center gap-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="h-9 w-9 p-2 border rounded-full"
                        variant="ghost"
                      >
                        <FcManager size={"1rem"} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-36">
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link
                            to={"/dashboard/profile"}
                            className="flex justify-center xmd:justify-start items-center gap-4 rounded-md hover:bg-foreground/10 transition-all duration-200"
                          >
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => console.log("Logout")}>
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </button>
                {openNotification && <NotificationPanel />}
                <ModeToggle />
              </div>
            </div>
          </div>
          <div className="bg-hero-pattern object-fill bg-cover min-h-[90dvh] max-h-[90dvh] overflow-y-auto p-4 md:p-8">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/vacancy-form" element={<VacancyForm />} />
              <Route path="/preview-vacancy" element={<PreviewVacancy />} />
              <Route path="/vacancy-details" element={<VacancyDetails />} />
              <Route path="/applications" element={<ShortlistApplication />} />
              <Route path="/profile" element={<ProfileSettings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
