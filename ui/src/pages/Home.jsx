import { useEffect, useState } from "react";
// components
import Card from "../components/Card";
import Rest from "../components/Rest";
import getLocation from "../utils/getLocation";
// icons
import { BsCloudSlashFill, BsCloudSunFill } from "react-icons/bs";

const Home = () => {
  // loading flag
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // variables
  const [lat, setLat] = useState(-1.2921);
  const [lon, setLon] = useState(36.8219);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  // results
  const [index, setIndex] = useState(0);
  const [list, setList] = useState([]);
  const [city, setCity] = useState({});

  const toggleFullScreen = () => {
    setFullScreenMode((prevFullScreenMode) => !prevFullScreenMode);
  };

  useEffect(() => {
    // Get Location
    console.log(getLocation());
    // Fetch Data
    const fetchData = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=-1.2921&lon=36.8219&appid=1220d3bd956050720587fe7607594091&units=metric"
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

    fetchData();
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="bg-red-400">DougWeather</div>
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
          <div className="flex flex-col h-full overflow-x-scroll">
            <div className="flex flex-col py-0">
              <div className="py-3 text-4xl w-full">
                <span className="font-pacifico font-extralight">
                  Carry an Umbrella
                </span>
              </div>
              <div className="flex flex-col overflow-x-scroll pb-4">
                <div className="flex w-full">
                  {list.map((single, index) => (
                    <div onClick={() => setIndex(index)}>
                      <Card
                        key={index}
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
