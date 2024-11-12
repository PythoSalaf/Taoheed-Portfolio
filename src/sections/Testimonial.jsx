import { ReviewCard } from "../components";

const Testimonial = () => {
  return (
    <div className="bg-primary py-5">
      <h2 className="text-center text-2xl md:text-3xl text-white">
        Testimonials
      </h2>
      <div className="mt-9">
        <ReviewCard />
      </div>
    </div>
  );
};

export default Testimonial;
