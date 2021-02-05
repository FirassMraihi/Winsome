import React from "react";
import {Text,Image } from "react-native";
import { BLACK, SALAMON } from "../assets/colors";
import { CircularWrapper } from "./style";

const CircularButton = ({color = SALAMON,imagePath,width,height}) => {
  return (
    <CircularWrapper color={color} width={width} height={height}>
      {imagePath &&    <Image
        style={{width:'95%',height:'95%',borderRadius:100}}
        resizeMode={'cover'}
        source={require('../assets/image/profilImage.jpg')}
      />}
    </CircularWrapper>
  );
};

export default CircularButton;
