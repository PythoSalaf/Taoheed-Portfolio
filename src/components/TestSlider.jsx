import Slider from "react-slick";
import { ReviewData } from "./Dummydata";
import ReviewCard from "./ReviewCard";

const TestSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          arrows: false,
          dots: true,
          draggable: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-[90%] relative mx-auto  mt-4">
      <Slider {...settings}>
        {ReviewData.map((review) => (
          <div key={review.id}>
            <ReviewCard {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestSlider;
