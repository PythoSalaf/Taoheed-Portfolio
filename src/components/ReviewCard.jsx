import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Profile } from "../assets";

const ReviewCard = ({ name, stack, review }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[250px] md:w-[300px] h-[310px] flex flex-col items-start bg-white shadow-lg  rounded-xl  pb-[1rem] relative">
        <div className="w-[90%] mx-auto py-5">
          <h2 className="uppercase flex items-start ">
            <BiSolidQuoteAltLeft />
            <span className="text-xl md:text-2xl font-semibold">
              Hardworking
            </span>
          </h2>
          <p className="my-5">{review}</p>
          <div className="flex items-center gap-x-4">
            <div className="rounded-full size-14">
              <img src={Profile} alt="pro" className="size-full rounded-full" />
            </div>
            <div className="">
              <h3 className="uppercase text-lg font-semibold">{name}</h3>
              <p className="text-sm">{stack}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
