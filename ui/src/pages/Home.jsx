import { useEffect, useState } from "react";
// components
import Card from "../components/Card";
import Rest from "../components/Rest";
// icons
import { BsCloudSlashFill, BsCloudSunFill } from "react-icons/bs";
// cities
import cities from "../utils/cities.json";

const Home = () => {
  // loading flag
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // variables
  const [advice, setAdvice] = useState("Fuck");
  const [lat, setLat] = useState(-1.2921);
  const [lon, setLon] = useState(36.8219);
  const [showCities, setShowCities] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  // results
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);
  const [city, setCity] = useState({});

  const toggleFullScreen = () => {
    setFullScreenMode((prevFullScreenMode) => !prevFullScreenMode);
  };

  useEffect(() => {
    // Fetch Data
    const fetchData = async (lat, lon) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1220d3bd956050720587fe7607594091&units=metric`
      );
      if (response.status === 200) {
        const data = await response.json();
        setCity(data.city);
        setList(data.list);
        setLoading(false);
      } else {
        setError(true);
      }
    };

    // Function calls
    fetchData(lat, lon);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="relative flex justify-center py-3 text-4xl bg-white shadow-md font-pacifico ">
        <span className="text-sky-500">DougWeather</span>
      </div>
      {loading ? (
        <div className="relative flex items-center justify-center w-full h-full text-sky-500">
          <div className="flex flex-col text-6xl">
            <BsCloudSunFill className="mx-auto" />
            <div className="flex text-xl font-pacifico">
              <span>Loading</span>
              <span className="animate-pulse">.</span>
              <span className="animate-pulse">.</span>
              <span className="animate-pulse">.</span>
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
              <div className="relative flex flex-col w-full p-2 text-xl">
                <div className="flex">
                  <span className="text-xl">Current City:</span>
                  <span
                    className="ml-1 underline"
                    onClick={() => setShowCities(true)}
                  >
                    {city.name}
                  </span>
                </div>
              </div>
              <div className="w-full py-3 text-4xl">
                <span className="font-pacifico font-extralight">{advice}</span>
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
            </div>
          </div>
          <Rest
            advice={advice}
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
