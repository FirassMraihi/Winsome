import React from "react";
import { View, Text, Image } from "react-native";

const PhotoBlock = ({
  imagePath = "../../../assets/image/profilImage.jpg",
}) => {
  return (
    <Image
      style={{ width: "100%", height: "100%", borderRadius: 20 }}
      resizeMode={"cover"}
      source={require("../../../assets/image/profilImage.jpg")}
    />
  );
};

export default PhotoBlock;
