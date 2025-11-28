import Notify from "./Notify";
import { FcBusinessman } from "react-icons/fc";
import { FcInfo } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { FcFolder } from "react-icons/fc";
import { FcGraduationCap } from "react-icons/fc";
import { FcDoughnutChart } from "react-icons/fc";

const NotificationPanel = () => {
  const sampleNotifications = [
    {
      icon: <FcBusinessman size={"1.5rem"} />,
      message: "New user registered.",
      time: "Just Now",
    },
    {
      icon: <FcInfo size={"1.5rem"} />,
      message: "New Vacancy for SDE-1 Developer has been created.",
      time: "11 min ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
    {
      icon: <FcDoughnutChart size={"1.5rem"} />,
      message: "Result for a vacancy.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="absolute z-[999] top-10 right-0 xmd:right-1/2 bg-card drop-shadow-md p-4 max-h-[60dvh] min-w-[300px] rounded-md border border-border/50 overflow-y-auto">
      <div className="flex flex-col justify-center items-start gap-4">
        <p>Notifications</p>
        {sampleNotifications.map((item, i) => (
          <Notify
            icon={item.icon}
            message={item.message}
            time={item.time}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationPanel;
