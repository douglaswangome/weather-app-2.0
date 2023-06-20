// icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdOutlineLocationOn, MdKeyboardDoubleArrowUp } from "react-icons/md";

const Rest = (props) => {
  const { onclick, fullScreenMode } = props;
  return (
    <div
      className={`absolute flex flex-col top-0 w-full h-screen bg-white p-2 ${
        fullScreenMode
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-500 text-xl`}
    >
      <button
        className="flex items-center text-lg w-fit ml-auto p-1 bg-sky-500 text-white group"
        onClick={onclick}
      >
        <MdKeyboardDoubleArrowUp className="group-hover:animate-bounce" />
        <span>Back to Overview</span>
      </button>
      {/* Location and Date */}
      <div className="flex flex-col">
        <span className="w-fit mx-auto text-3xl font-pacifico">
          Try Work from Home
        </span>
        <div className="flex items-center text-2xl mt-2">
          <span className="flex items-center">
            <MdOutlineLocationOn />
            Nairobi
          </span>
          <div className="flex ml-1">
            <span className="mr-1">(Lat: -1.45773, </span>
            <span>Lon: 43.89654)</span>
          </div>
        </div>
        <span>Monday 24, June 2023 9:23AM</span>
        <div className="flex flex-wrap text-lg">
          <span>Humidity: 56%</span>
          <span className="ml-2">Pressure: 1028hPa</span>
        </div>
      </div>
      <div className="h-[1px] bg-blue-300 my-1"></div>
      {/* 1/2 Overview */}
      <div className="flex my-2">
        <img src={"http://openweathermap.org/img/w/03d.png"} alt="clouds" />
        <div className="flex flex-col">
          <span>Clouds</span>
          <span>Broken Clouds</span>
        </div>
        <div className="flex flex-col flex-1 px-2 mx-2 text-lg">
          <span>Visibility: 8000/10000(in km)</span>
          <div className="flex items-center">
            <AiFillEyeInvisible />
            <div className="mx-2 h-2 rounded-lg overflow-hidden bg-sky-500 flex-1">
              <div className="w-[80%] rounded-lg bg-sky-200 h-full"></div>
            </div>
            <AiFillEye />
          </div>
        </div>
        <div className="flex flex-col w-fit ml-auto">
          <span>Cloud Cover: </span>
          <span>60%</span>
        </div>
      </div>
      <div className="h-[1px] bg-blue-300 my-1"></div>
      <div className="flex flex-wrap">
        {/* Temparature */}
        <div className="flex flex-col p-1 w-[50%]">
          <span className="text-2xl text-sky-500">Temp:</span>
          <div className="flex flex-col">
            <span>Feels like:</span>
            <span className="text-3xl">18&deg;</span>
          </div>
          <div className="flex flex-col">
            <span>Max:</span>
            <span className="text-3xl">18&deg;</span>
          </div>
          <div className="flex flex-col">
            <span>Min:</span>
            <span className="text-3xl">18&deg;</span>
          </div>
          <div className="flex flex-col">
            <span>Actual:</span>
            <span className="text-3xl">18&deg;</span>
          </div>
        </div>
        {/* Wind */}
        <div className="flex flex-col p-1 w-[50%]">
          <span className="text-2xl text-sky-500">Wind:</span>
          <div className="flex flex-col">
            <span>Speed:</span>
            <span className="text-3xl">18m/s</span>
          </div>
          <div className="flex flex-col">
            <span>Gust:</span>
            <span className="text-3xl">18m/s</span>
          </div>
          <div className="flex flex-col">
            <span>Degree:</span>
            <MdKeyboardDoubleArrowUp className="rotate-[18deg]" />
            <span className="text-3xl">18</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
