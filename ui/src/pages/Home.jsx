import { useState } from "react";
// components
import Card from "../components/Card";
import Rest from "../components/Rest";

const Home = () => {
  const [fullScreenMode, setFullScreenMode] = useState(false);

  const toggleFullScreen = () => {
    setFullScreenMode((prevFullScreenMode) => !prevFullScreenMode);
  };

  return (
    <div className="relative">
      <div className="flex overflow-x-auto w-full">
        <Card onclick={toggleFullScreen} />
      </div>
      <div className="flex flex-col h-20 mt-10 text-5xl justify-center items-center">
        <span className="text-2xl underline">My Advice:</span>
        <span className="font-pacifico">Try work from home</span>
      </div>

      <Rest onclick={toggleFullScreen} fullScreenMode={fullScreenMode} />
    </div>
  );
};

export default Home;
