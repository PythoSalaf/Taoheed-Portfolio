import { FaLinkedinIn } from "react-icons/fa6";
import { Blob } from "../assets";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  const contactDetail = [
    {
      id: 1,
      title: "call me",
      icon: <FiPhone className=" size-[55%]" />,
      link: "tel:+2348106264297",
      displayText: "+2348106264297",
    },
    {
      id: 2,
      title: "email me",
      icon: <MdOutlineEmail className=" size-[55%]" />,
      link: "mailto:alfaheed1010@gmail.com",
      displayText: "alfaheed1010@gmail.com",
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: <FaLinkedinIn className=" size-[55%]" />,
      link: "https://www.linkedin.com/in/pythosalaf",
      displayText: "LinkedIn",
    },
    {
      id: 4,
      title: "Location",
      icon: <IoLocationOutline className=" size-[55%]" />,
      link: "https://www.google.com/maps?q=Nigeria",
      displayText: "Nigeria",
    },
  ];

  return (
    <div className="bg-white w-full py-7" id="contact">
      <h2 className="text-center text-2xl font-semibold md:text-3xl mt-6 mb-10">
        Contact
      </h2>
      <div className="flex items-start flex-col-reverse md:flex-row justify-between">
        <div className="relative w-full">
          <img
            src={Blob}
            alt="Blob Background"
            className="w-[98%] md:w-[70%]"
          />

          <div className="absolute inset-0 left-5 top-20 md:top-36">
            {contactDetail.map((item) => (
              <div
                className="flex items-center gap-x-3 mb-5 md:mb-8"
                key={item.id}
              >
                <div className="bg-white rounded-lg size-10 md:size-[50px] text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-white w-full">
                  <span className="text-base capitalize">{item.title}</span>
                  <p className=" mt-[2px] font-semibold">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline text-white text-sm md:text-lg lg:text-xl"
                    >
                      {item.displayText}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full mb-14 md:mb-0">
          <div className="w-[90%] md:w-[80%] mx-auto">
            <form>
              <input
                type="text"
                placeholder="Name........"
                className="border border-[#dadada] w-full h-11 md:h-14 rounded-lg px-3"
              />
              <input
                type="text"
                placeholder="Email........"
                className="border border-[#dadada] w-full my-4 h-11 md:h-14 rounded-lg px-3"
              />
              <textarea
                placeholder="Message......."
                className="px-3 border border-[#dadada] rounded-lg resize-none w-full pt-2 h-28"
              ></textarea>
              <button className="text-white bg-primary justify-center flex items-center w-[60%] md:w-[45%] lg:w-[35%]  mx-auto mt-6 py-2 text-lg capitalize rounded-lg">
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
