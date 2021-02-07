import React from "react";
import { View, Text, Image } from "react-native";

const PhotoBlock = ({
  imagePath = "../../../assets/image/profilImage.jpg",
}) => {
  return (
    <View
      style={{
        paddingLeft: "2%",
        paddingRight: "2%",
        height:'100%',
        width:'100%'
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 15,
        }}
        resizeMode={"cover"}
        source={require("../../../assets/image/profilImage.jpg")}
      />
    </View>
  );
};

export default PhotoBlock;
