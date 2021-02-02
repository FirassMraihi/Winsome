import React from "react";
import { View, Text, ImageBackground } from "react-native";
import RoundedInput from "../../../component/roundedInput";
import { InputHeader } from "../../../component/style";
import { HomeImageWrapper } from "../style/style";
const Header = () => {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "95%",
        flexDirection: "column",
      }}
      imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
      source={require("../../../assets/image/homeWalpaper.jpg")}
    >
      <View style={{ flex: 1 }}></View>
      <View
        style={{
          flex: 1,
          paddingBottom:"5%",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
          <InputHeader>Trouvez et commendez des bons services</InputHeader>
        <RoundedInput />
      </View>
    </ImageBackground>
  );
};

export default Header;
