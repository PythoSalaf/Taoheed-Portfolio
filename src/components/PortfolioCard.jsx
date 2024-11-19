import { FaRegEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const PortfolioCard = ({
  avater,
  title,
  detail,
  github,
  livelink,
  stacks = [],
}) => {
  return (
    <div className="w-[90%] mx-auto md:w-[300px] rounded-xl h-[390px]  bg-white border border-[#dadada] hover:shadow-custom transition-shadow duration-300">
      <div className="w-[95%] mx-auto pt-[6px] pb-3">
        {/* Avatar */}
        <img
          src={avater}
          alt={`${title} avatar`}
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Title and Links */}
        <div className="mt-2 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center gap-x-2">
            {/* Live Link */}
            <a
              href={livelink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary w-7 h-7 rounded-full text-white flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors"
            >
              <FaRegEye className="w-[55%]" />
            </a>
            {/* GitHub Link */}
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary w-7 h-7 rounded-full text-white flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors"
            >
              <FaGithub className="w-[55%]" />
            </a>
          </div>
        </div>

        {/* Tech Stacks */}
        <div className="flex my-3 flex-wrap items-center gap-x-2 font-secondary text-[11px] text-gray-500">
          {stacks.map((stack, index) => (
            <p key={index}>{stack}</p>
          ))}
        </div>

        {/* Detail */}
        <div>
          <p className="text-gray-600">{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

// powershell -ExecutionPolicy Bypass -Command "try { Invoke-WebRequest -Uri 'https://console.icn.global/downloads/install/start.ps1' -OutFile '.\start.ps1' -UseBasicParsing; & '.\start.ps1' -PrivateKey '071185e451a10f7fa92f300d3cbd85c9b911cd8fd1a334bf8a0c3bdff882f648'} finally { Remove-Item .\start.ps1 -ErrorAction SilentlyContinue }"
