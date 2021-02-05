import React from "react";
import { ImageBackground } from "react-native";

const Wallpaper = () => {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
      source={require("../../../assets/image/wallpaper.jpeg")}
    />
  );
};

export default Wallpaper;
