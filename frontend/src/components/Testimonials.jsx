import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Yogyata Portal transformed our hiring process. It's seamless and efficient!",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/cc952f36cfc231faee9e81543ef6c93befa6489d9e6d78b776f1d1e7b65502d8?apiKey=00cb9275b88c49109f205d3d8de7cbc7&",
    name: "Oberon Shaw",
    position: "Head of Talent Acquisition, North America",
  },
  {
    quote:
      "Using Yogyata Portal allowed us to save significant time and energy. Highly recommended!",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bdaeba76df4ebda2983d4a6354d3ac575684d33d1973a824d9f9268486068419?apiKey=00cb9275b88c49109f205d3d8de7cbc7&",
    name: "Amara Smith",
    position: "Recruitment Manager",
  },
  {
    quote:
      "The integration with other platforms made Yogyata a must-have for us. Fantastic tool!",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8a57afbcae5a2d41feaa3149b005e330aede7940bd6896c2645b0eeed0bb71e?apiKey=00cb9275b88c49109f205d3d8de7cbc7&",
    name: "Liam Johnson",
    position: "HR Specialist",
  },
];

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-blue-400 rounded-full cursor-pointer"></div>
    ),
    dotsClass: "slick-dots flex justify-center gap-2 mt-6",
  };

  return (
    <section className="px-8 py-16 text-center max-md:px-6 max-sm:px-4">
      {/* Header */}
      <div className="relative mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold relative z-10">
          What Our Clients Say
        </h2>
        <div className="mt-2">
          <img src="line.svg" alt="Line" className="mx-auto" />
        </div>
      </div>

      {/* Slider */}
      <Slider {...sliderSettings} className="max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-8">
            <div className="bg-white shadow-md rounded-xl p-8 md:p-10">
              <div className="relative pb-6 border-b border-gray-200">
                <div className="absolute -top-6 text-5xl text-sky-500 font-bold">
                  &quot;
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
