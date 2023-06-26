import React from "react";

export default function useLocation() {
  const [location, setLocation] = React.useState({
    lat: -1.2921,
    lon: 36.8219,
  });

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setLocation((prevLocation) => {
      return {
        ...prevLocation,
        lat: latitude,
        lon: longitude,
      };
    });
  };

  const errors = (err) => {
    console.warn(`Error ${err.code}: ${err.message}`);
  };

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "prompt") {
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (result.state === "denied") {
        }
      });
    } else {
      console.log("Geolocation is not available");
    }
  };

  getLocation();

  return location;
}
