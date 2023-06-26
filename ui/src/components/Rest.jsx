import { useEffect, useState } from "react";
// icons & images
import { BsX, BsSunriseFill, BsSunsetFill } from "react-icons/bs";

const Rest = (props) => {
  const { advice, data, city, onclick, fullScreenMode } = props;
  const [showSunset, setShowSunset] = useState(false);

  const toggleSunset = () => {
    setShowSunset(!showSunset);
  };

  useEffect(() => {
    if (!fullScreenMode) {
      setShowSunset(false);
    }
  }, [fullScreenMode]);

  return (
    <div
      className={`absolute flex flex-col top-0 h-screen w-full overflow-y-hidden bg-gray-100 ${
        fullScreenMode
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none delay-500"
      } transition-all duration-500 text-xl`}
    >
      <div className="absolute top-[1%] left-[50%] rounded-t-2xl translate-x-[-50%] w-full max-[1024px]:w-[48%] max-[810px]:w-[60%] max-[640px]:w-[80%] max-[480px]:w-[98%] bg-transparent z-[11]">
        <button
          className="fixed top-[1%] right-1 z-30 bg-transparent  text-white p-1 text-4xl rounded-full"
          onClick={onclick}
        >
          <BsX />
        </button>
        <button
          className={`fixed top-[1%] left-1 z-30 bg-transparent  text-white p-1 text-4xl rounded-full transition-all duration-500 ${
            !showSunset ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleSunset}
        >
          <BsSunsetFill />
        </button>
        <button
          className={`fixed top-[1%] left-1 z-30 bg-transparent  text-white p-1 text-4xl rounded-full transition-all duration-500 ${
            showSunset ? "opacity-0" : "opacity-100"
          }`}
          onClick={toggleSunset}
        >
          <BsSunriseFill />
        </button>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between h-full w-full font-pacifico max-[820px]:flex-col">
          <div
            className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col h-[98%] my-auto text-white w-[38%] p-2 rounded-2xl transition-all duration-500 ${
              showSunset
                ? "rotate-[-12deg] opacity-20 z-0"
                : "rotate-0 opacity-100 z-10"
            } max-[1024px]:w-[48%] max-[810px]:w-[60%] max-[640px]:w-[80%] max-[480px]:w-[98%]`}
            style={{ background: "url('/images/sunrise.jpg')" }}
          >
            <div className="mx-auto my-1 text-xl w-fit">
              <span>{new Date(city.sunrise * 1000).toDateString()}</span>
            </div>
            <div className="flex flex-col my-2 w-fit">
              <span className="text-5xl max-[450px]:text-3xl">Sunrise</span>
              <span className="text-xl font-comic-neue">
                {new Date(city.sunrise * 1000).toLocaleTimeString()}
              </span>
            </div>

            <span className="text-4xl font-pacifico w-fit mx-auto my-2 max-[450px]:text-2xl">
              {advice}
            </span>
            <div className="flex justify-between max-[450px]:flex-col mt-4">
              <div className="flex flex-1 max-[450px]:w-fit max-[450px]:mx-auto">
                <img
                  className="object-contain"
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                />
                <div className="flex flex-col w-full">
                  <span className="text-4xl max-[450px]:text-3xl">
                    {data.weather[0].main}
                  </span>
                  <span className="text-base capitalize font-comic-neue">
                    {data.weather[0].description}
                  </span>
                </div>
              </div>
              <div className="flex flex-col font-comic-neue mx-2 max-[450px]:mx-0">
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
              <div className="flex justify-between mt-4 font-comic-neue">
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
          <div
            className={`absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] flex flex-col h-[98%] my-auto text-white w-[38%] p-2 rounded-2xl transition-all duration-500 ${
              showSunset
                ? "z-10 rotate-0 opacity-100"
                : "z-0 rotate-12 opacity-20"
            } max-[1024px]:w-[48%] max-[810px]:w-[60%] max-[640px]:w-[80%] max-[480px]:w-[98%]`}
            style={{ background: "url('/images/sunset.jpg')" }}
          >
            <div className="flex flex-col mx-auto my-2 w-fit">
              <span className="text-5xl max-[450px]:text-3xl ml-auto">
                {city.name}, {city.country}
              </span>
              <div className="flex mx-auto font-comic-neue w-fit">
                <span className="mr-1">Lat: {city.coord.lat},</span>
                <span>Lon: {city.coord.lon}</span>
              </div>
            </div>
            <div className="w-full mt-auto mb-0 backdrop-blur-sm">
              <div className="flex flex-col w-full my-2">
                <span className="text-5xl max-[450px]:text-3xl">Wind:</span>
                <div className="flex justify-between mt-4 font-comic-neue">
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
                <span className="mt-3 text-xl font-comic-neue">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rest;
