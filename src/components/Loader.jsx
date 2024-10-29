import { Rings } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
