import PropTypes from "prop-types";
import { useState } from "react";

const FeatureCard = ({ title, imageSrc, imagePosition, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col items-center md:flex-row gap-8 md:gap-12 ${
        imagePosition === "left" ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        src={imageSrc}
        alt={title}
        className="w-full max-w-lg h-auto rounded-lg shadow-md sm:max-w-md lg:max-w-lg"
      />
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p
          className={`mt-4 text-sm text-foreground/60 ${
            isExpanded ? "line-clamp-none" : "line-clamp-3"
          }`}
        >
          {content}
        </p>
        <button
          onClick={toggleExpand}
          className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-semibold"
        >
          {isExpanded ? "Read less..." : "Read more..."}
        </button>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imagePosition: PropTypes.oneOf(["left", "right"]).isRequired,
  content: PropTypes.string.isRequired,
};

export default FeatureCard;
