import { PiPictureInPictureDuotone } from "react-icons/pi";
import PropTypes from "prop-types";

const Notify = ({ icon, message, time }) => {
  return (
    <button className="flex justify-start items-center gap-3 p-2 rounded hover:bg-card-foreground/10 w-full">
      <p>{icon ?? <PiPictureInPictureDuotone />}</p>
      <div className="flex flex-col gap-2 ">
        <p className="line-clamp-2 text-sm text-left">{message}</p>
        <p className="line-clamp-1 text-nowrap text-xs text-left text-foreground/50">
          {time}
        </p>
      </div>
    </button>
  );
};
Notify.propTypes = {
  icon: PropTypes.element,
  message: String,
  time: String,
};

export default Notify;
