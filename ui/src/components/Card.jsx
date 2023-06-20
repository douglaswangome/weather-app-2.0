// icons
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import {
  MdOutlineLocationOn,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";

const Card = (props) => {
  const { single, city, onclick } = props;

  return (
    <div className="flex flex-col bg-gradient-to-br to-sky-400 from-sky-500 w-60 min-w-60 m-1 p-1 rounded-xl flex-shrink-0 text-white">
      <div className="flex flex-col items-center text-5xl font-semibold">
        <div className="flex items-center text-xl">
          <MdOutlineLocationOn />
          <span>{city.name}</span>
        </div>
        <div className="flex items-center w-full">
          <span className="mr-auto">{single.main.temp}&deg;</span>
          <img
            src={`http://openweathermap.org/img/w/${single.weather[0].icon}.png`}
          />
        </div>
        <span className="text-xl w-fit mx-auto">
          {new Date(single.dt * 1000).toLocaleTimeString()}
        </span>
        <span className="text-xl w-fit mx-auto">
          {new Date(single.dt * 1000).toDateString()}
        </span>
      </div>
      <div className="bg-white h-[1px] my-1 w-full"></div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <span>{single.weather[0].main}</span>
          <span className="capitalize">{single.weather[0].description}</span>
        </div>
        <span>{single.clouds.all}% Cloudy</span>
        <span>Pressure: {single.main.pressure}hpa</span>
        <span>Humidity: {single.main.humidity}%</span>
        <div className="flex flex-col">
          <span className="underline">
            Visibility: {(single.visibility / 10000) * 100}%
          </span>
          <div className="flex items-center my-1">
            <AiFillEyeInvisible />
            <div className="mx-0.5 h-2 rounded-lg overflow-hidden bg-white flex-1">
              <div
                className={`w-[${
                  (single.visibility / 10000) * 100
                }%] rounded-lg bg-sky-200 h-full`}
              ></div>
            </div>
            <AiFillEye />
          </div>
        </div>
        <button
          className="flex items-center justify-center my-2 p-1 bg-transparent border border-white group"
          onClick={onclick}
        >
          <MdOutlineKeyboardDoubleArrowDown className="group-hover:animate-bounce" />
          <span>View Full Report</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
