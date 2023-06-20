import { useEffect, useState } from "react";
// components
import Card from "../components/Card";
import Rest from "../components/Rest";

const Home = () => {
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
    // Fetch Data
    const fetchData = async () => {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=-1.2921&lon=36.8219&appid=1220d3bd956050720587fe7607594091&units=metric"
      );
      const data = await response.json();
      setCity(data.city);
      setList(data.list);
    };

    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="text-sky-500 shadow-xl flex justify-center text-4xl mb-4 font-pacifico p-2">
        <span>Sí Weather</span>
      </div>
      <div className="flex overflow-x-auto w-full">
        {list.map((single, index) => (
          <div onClick={() => setIndex(index)}>
            <Card single={single} city={city} onclick={toggleFullScreen} />
          </div>
        ))}
      </div>
      <div className="flex flex-col mt-10 text-4xl justify-center items-center">
        <span className="text-2xl underline">My Advice:</span>
        <span className="font-pacifico font-extralight">
          Try work from home
        </span>
      </div>

      <Rest
        city={city}
        data={list[index]}
        onclick={toggleFullScreen}
        fullScreenMode={fullScreenMode}
      />
    </div>
  );
};

export default Home;
