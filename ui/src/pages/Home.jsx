import { useEffect, useState } from "react";
// components
import Card from "../components/Card";
import Rest from "../components/Rest";
// icons
import { BsCloudSlashFill, BsCloudSunFill } from "react-icons/bs";
// location
import useLocation from "../utils/useLocation";

const Home = () => {
  // loading flag
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // variables
  const [main, setMain] = useState({
    advice: "Loading",
    bgImage: "url('/images/sunny.jpg')",
    color: "black",
  });
  const [rest, setRest] = useState({
    advice: "Loading",
    bgImage: "url('/images/sunny.jpg')",
  });
  const location = useLocation();
  const [fullScreenMode, setFullScreenMode] = useState(false);

  // results
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);
  const [city, setCity] = useState({});

  const toggleFullScreen = () => {
    setFullScreenMode((prevFullScreenMode) => !prevFullScreenMode);
    if (fullScreenMode) {
      setTimeout(() => {
        setIndex(0);
      }, 600);
    }
  };

  useEffect(() => {
    // Give Advice
    const giveAdviceAndBackground = (weather_main, weather_desc) => {
      if (index === 0) {
        // Adjust main object
        if (weather_main.toLowerCase() === "atmosphere") {
          setMain((prevMain) => {
            return {
              ...prevMain,
              bgImage: "url('/images/mist.jpg')",
            };
          });
        } else if (weather_main.toLowerCase() === "snow") {
          setMain((prevMain) => {
            return {
              ...prevMain,
              advice: "Just stay indoors and enjoy your favorite movie",
            };
          });
        } else if (weather_main.toLowerCase() === "clouds") {
          setMain((prevMain) => {
            return {
              ...prevMain,
              bgImage: "url('/images/cloudy.jpg')",
            };
          });
          if (
            weather_desc.split(" ")[0] === "overcast" ||
            weather_desc.split(" ")[0] === "broken"
          ) {
            setMain((prevMain) => {
              return {
                ...prevMain,
                advice: "Might be chilly, wear warm clothing",
              };
            });
          } else {
            setMain((prevMain) => {
              return { ...prevMain, advice: "Just a normal day" };
            });
          }
        } else if (
          weather_main.toLowerCase() === "rain" ||
          weather_main.toLowerCase() === "thunderstorm" ||
          weather_main.toLowerCase() === "drizzle"
        ) {
          setMain((prevMain) => {
            return {
              ...prevMain,
              color: "white",
              bgImage: "url('/images/rainy.jpg')",
            };
          });
          if (weather_desc.split(" ")[0].toLowerCase() === "light") {
            setMain((prevMain) => {
              return {
                ...prevMain,
                advice: "Carry an umbrella",
              };
            });
          } else {
            setMain((prevMain) => {
              return {
                ...prevMain,
                advice: "Try work from home. Keep Warm",
              };
            });
          }
        } else {
          setMain((prevMain) => {
            return {
              ...prevMain,
              advice: "Take a run or do a fun activity",
            };
          });
        }
      } else {
        // Adjust rest object
        if (weather_main.toLowerCase() === "atmosphere") {
          setRest((prevRest) => {
            return {
              ...prevRest,
              bgImage: "url('/images/mist.jpg')",
            };
          });
        } else if (weather_main.toLowerCase() === "snow") {
          setRest((prevRest) => {
            return {
              ...prevRest,
              advice: "Just stay indoors and enjoy your favorite movie",
            };
          });
        } else if (weather_main.toLowerCase() === "clouds") {
          setRest((prevRest) => {
            return {
              ...prevRest,
              bgImage: "url('/images/cloudy.jpg')",
            };
          });
          if (
            weather_desc.split(" ")[0] === "overcast" ||
            weather_desc.split(" ")[0] === "broken"
          ) {
            setRest((prevRest) => {
              return {
                ...prevRest,
                advice: "Might be chilly, wear warm clothing",
              };
            });
          } else {
            setRest((prevRest) => {
              return { ...prevRest, advice: "Just a normal day" };
            });
          }
        } else if (
          weather_main.toLowerCase() === "rain" ||
          weather_main.toLowerCase() === "thunderstorm" ||
          weather_main.toLowerCase() === "drizzle"
        ) {
          setRest((prevRest) => {
            return {
              ...prevRest,
              color: "white",
              bgImage: "url('/images/rainy.jpg')",
            };
          });
          if (weather_desc.split(" ")[0].toLowerCase() === "light") {
            setRest((prevRest) => {
              return {
                ...prevRest,
                advice: "Carry an umbrella",
              };
            });
          } else {
            setRest((prevRest) => {
              return {
                ...prevRest,
                advice: "Try work from home. Keep Warm",
              };
            });
          }
        } else {
          setRest((prevRest) => {
            return {
              ...prevRest,
              advice: "Take a run or do a fun activity",
            };
          });
        }
      }
    };
    // Fetch Data and Assign Location
    const fetchData = async (lat, lon) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      if (response.status === 200) {
        const data = await response.json();
        giveAdviceAndBackground(
          data.list[index].weather[0].main,
          data.list[index].weather[0].description
        );
        setCity(data.city);
        setList(data.list);
        setLoading(false);
      } else {
        setError(true);
      }
    };

    // Function calls
    fetchData(location.lat, location.lon);
  }, [index]);

  return (
    <div
      className="h-screen overflow-hidden !bg-cover !bg-no-repeat"
      style={{ background: main.bgImage }}
    >
      <div className="relative flex justify-center py-3 text-4xl bg-transparent shadow-md font-pacifico ">
        <span className="text-sky-500">Weather App</span>
      </div>
      {loading ? (
        <div className="relative flex items-center justify-center w-full h-full text-sky-500">
          <div className="flex flex-col text-6xl">
            <BsCloudSunFill className="mx-auto" />
            <div className="flex text-xl font-pacifico">
              <span>Loading</span>
              <span className="animate-pulse">.</span>
              <span className="delay-300 animate-pulse">.</span>
              <span className="delay-500 animate-pulse">.</span>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="relative flex items-center justify-center w-full h-full text-red-600">
          <div className="flex flex-col text-6xl">
            <BsCloudSlashFill className="mx-auto" />
            <div className="flex text-xl font-pacifico">
              <span>Check your internet connection and try again</span>
              <span className="animate-pulse">.</span>
              <span className="animate-pulse">.</span>
              <span className="animate-pulse">.</span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col h-full">
            <div className="flex flex-col py-0">
              <div className="w-full py-3 text-4xl">
                <span
                  className={`font-pacifico font-extralight text-${main.color}`}
                >
                  {main.advice}
                </span>
              </div>
              <div className="flex flex-col pb-4 overflow-x-scroll">
                <div className="flex w-full">
                  {list.map((single, index) => (
                    <div key={index} onClick={() => setIndex(index)}>
                      <Card
                        single={single}
                        city={city}
                        onclick={toggleFullScreen}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className={`text-xl text-${main.color}`}>
                <span className="before:content-['~']">
                  The background image may not match your current sky view
                </span>
              </div>
            </div>
          </div>
          <Rest
            advice={rest.advice}
            bgImage={rest.bgImage}
            city={city}
            data={list[index]}
            onclick={toggleFullScreen}
            fullScreenMode={fullScreenMode}
          />
        </>
      )}
    </div>
  );
};

export default Home;
