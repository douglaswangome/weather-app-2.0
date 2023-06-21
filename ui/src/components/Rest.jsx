// icons & images
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Rest = (props) => {
  const { data, city, onclick, fullScreenMode } = props;

  return (
    <div
      className={`absolute flex flex-col top-0 h-screen w-full bg-white py-2 px-1 ${
        fullScreenMode
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } transition-all duration-500 text-xl`}
    >
      <button
        className="fixed top-[1%] right-1 z-30 bg-white text-black shadow-2xl p-2 rounded-full"
        onClick={onclick}
      >
        <MdKeyboardDoubleArrowUp />
      </button>
      <div className="flex flex-col">
        <div className="flex justify-between h-[95vh] w-full font-pacifico max-[820px]:flex-col">
          <div
            className="flex flex-col h-full text-white w-[47%] p-2 rounded-2xl hover:scale-[.99] transition-all duration-500 max-[820px]:min-h-screen max-[820px]:mt-4 max-[820px]:w-[80%] max-[820px]:mx-auto max-[640px]:w-[88%] max-[450px]:w-[98%]"
            style={{ background: "url('/images/sunrise.jpg')" }}
          >
            <div className="w-fit mx-auto text-xl my-1">
              <span>{new Date(city.sunrise * 1000).toDateString()}</span>
            </div>
            <div className="flex flex-col w-fit my-2">
              <span className="text-5xl max-[450px]:text-3xl">Sunrise</span>
              <span className="text-xl font-comic-neue">
                {new Date(city.sunrise * 1000).toLocaleTimeString()}
              </span>
            </div>
            <div className="flex flex-col w-fit ml-auto my-2">
              <span className="text-5xl max-[450px]:text-3xl ml-auto">
                {city.name}, {city.country}
              </span>
              <div className="flex font-comic-neue">
                <span className="mr-1">Lat: {city.coord.lat},</span>
                <span>Lon: {city.coord.lon}</span>
              </div>
            </div>
            <div className="flex justify-between max-[450px]:flex-col mt-4">
              <div className="flex w-[50%] max-[450px]:w-fit max-[450px]:mx-auto">
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                />
                <div className="flex flex-col w-full">
                  <span className="text-4xl max-[450px]:text-3xl">
                    {data.weather[0].main}
                  </span>
                  <span className="text-base font-comic-neue capitalize">
                    {data.weather[0].description}
                  </span>
                </div>
              </div>
              <div className="flex flex-col font-comic-neue">
                <span>Cloud Cover:</span>
                <span className="text-4xl">{data.clouds.all}%</span>
              </div>
              <div className="flex flex-col font-comic-neue">
                <span>Humidity:</span>
                <span className="text-4xl">{data.main.humidity}%</span>
              </div>
            </div>
            <div className="flex flex-col w-full my-2">
              <span className="text-5xl max-[450px]:text-3xl">Temp:</span>
              <div className="flex justify-between font-comic-neue mt-4">
                <div className="flex flex-col w-fit">
                  <span className="text-3xl max-[450px]:text-2xl ml-auto">
                    {data.main.feels_like}&deg;
                  </span>
                  <span className="text-base">Feels like:</span>
                </div>
                <div className="flex flex-col w-fit">
                  <span className="text-3xl max-[450px]:text-2xl ml-auto">
                    {data.main.temp}&deg;
                  </span>
                  <span className="text-base">Actual:</span>
                </div>
                <div className="flex flex-col w-fit">
                  <span className="text-3xl max-[450px]:text-2xl ml-auto">
                    {data.main.temp_max}&deg;
                  </span>
                  <span className="text-base">Max:</span>
                </div>
                <div className="flex flex-col w-fit">
                  <span className="text-3xl max-[450px]:text-2xl ml-auto">
                    {data.main.temp_min}&deg;
                  </span>
                  <span className="text-base">Min:</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full my-2">
              <span className="text-5xl max-[450px]:text-3xl">Pressure:</span>
              <span className="font-comic-neue">{data.main.pressure} hPa</span>
            </div>
          </div>
          {/* <div
            className="flex flex-col h-full text-white w-[47%] p-2 rounded-2xl hover:scale-[.99] transition-all duration-500 max-[820px]:min-h-screen max-[820px]:mt-4 max-[820px]:w-[80%] max-[820px]:mx-auto max-[640px]:w-[88%] max-[450px]:w-[98%]"
            style={{ background: "url('/images/sunset.jpg')" }}
          >
            <span className="text-4xl font-pacifico w-fit mx-auto my-2">
              Try Work from Home
            </span>
            <div className="w-full mb-0 mt-auto backdrop-blur-sm">
              <div className="flex flex-col w-full my-2">
                <span className="text-5xl max-[450px]:text-3xl">Wind:</span>
                <div className="flex justify-between font-comic-neue mt-4">
                  <div className="flex flex-col w-fit">
                    <span className="text-5xl max-[450px]:text-3xl ml-auto">
                      {data.wind.speed}
                    </span>
                    <span className="text-base">Speed: (in m/s)</span>
                  </div>
                  <div className="flex flex-col w-fit">
                    <span className="text-5xl max-[450px]:text-3xl ml-auto">
                      {data.wind.gust}
                    </span>
                    <span className="text-base">Gust: (in m/s)</span>
                  </div>
                  <div className="flex flex-col w-fit">
                    <span className="text-5xl max-[450px]:text-3xl ml-auto">
                      {data.wind.deg}&deg;
                    </span>
                    <span className="text-base">Direction:</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full my-2">
                <span className="text-5xl max-[450px]:text-3xl">
                  Visibility:
                </span>
                <span className="text-xl font-comic-neue mt-3">
                  {data.visibility}/10000 (in km)
                </span>
              </div>
              <div className="flex flex-col w-fullmy-2">
                <span className="text-5xl max-[450px]:text-3xl">Sunset</span>
                <span className="text-xl font-comic-neue">
                  {new Date(city.sunset * 1000).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Rest;
