const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg py-4">
      <div className="layout flex items-center justify-between">
        <a href="/">
          <h2 className="uppercase text-3xl ">Taoheed</h2>
        </a>
        <div className="font-secondary text-xl flex items-center gap-x-4">
          <a href="http://">Home</a>
          <a href="http://">About</a>
          <a href="http://">Skills</a>
          <a href="http://">Portfolio</a>
          <a href="http://">Testimonial</a>
          <a href="http://">Contact</a>
        </div>
        <button className="border border-[#dadada] px-4 rounded-lg py-[6px]">
          Let's talk
        </button>
      </div>
    </div>
  );
};

export default Navbar;
