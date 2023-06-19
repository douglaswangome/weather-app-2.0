// icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  MdOutlineLocationOn,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";

const Card = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br to-sky-400 from-sky-500 w-60 min-w-60 m-1 p-1 rounded-xl flex-shrink-0 text-white">
      <div className="flex flex-col items-center text-6xl font-semibold">
        <div className="flex items-center text-xl">
          <MdOutlineLocationOn />
          <span>Nairobi</span>
        </div>
        <div className="flex items-center w-full">
          <span className="mr-auto">24&deg;</span>
          <img src={"http://openweathermap.org/img/w/03d.png"} alt="clouds" />
        </div>
        <span className="text-xl w-fit mx-auto">9:00 AM</span>
        <span className="text-xl w-fit mx-auto">Monday 24, June</span>
      </div>
      <div className="bg-white h-[1px] my-1 w-full"></div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span>Clouds</span>
          <span>Broken Clouds</span>
        </div>
        <span>63% Cloudy</span>
        <span>Pressure: 1060hpa</span>
        <span>Humidity: 54%</span>
        <div className="flex flex-col">
          <span className="underline">Visibility: 80%</span>
          <div className="flex items-center">
            <AiFillEyeInvisible />
            <div className="mx-0.5 h-2 rounded-lg overflow-hidden bg-white flex-1">
              <div className="w-[80%] rounded-lg bg-sky-200 h-full"></div>
            </div>
            <AiFillEye />
          </div>
        </div>
        <button className="flex items-center justify-center my-2 bg-transparent border border-white group">
          <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-bounce" />
          <span>View Full Report</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
