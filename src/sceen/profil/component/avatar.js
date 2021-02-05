import React from "react";
import { View } from "react-native";
import CircularButton from "../../../component/circularButton";
import { AvatarWrapper } from "../style/style";

const Avatar = ({ imagePath = "../../../assets/image/profilImage.jpg" }) => {
  return (
    <AvatarWrapper>
    <CircularButton width={`36%`} imagePath={imagePath} />
    </AvatarWrapper>
  );
};

export default Avatar;
