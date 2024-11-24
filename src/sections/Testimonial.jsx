import { TestSlider } from "../components";

const Testimonial = () => {
  return (
    <div className="bg-primary py-10 w-full" id="testimonial">
      <h2 className="text-center text-2xl md:text-3xl text-white font-semibold">
        Testimonials
      </h2>
      <div className="my-12 w-[90%] md:w-[98%] mx-auto">
        <TestSlider />
      </div>
    </div>
  );
};

export default Testimonial;
