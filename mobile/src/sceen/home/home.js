import React from "react";
import { View, Text } from "react-native";
import { DARKERORANGE, NAVYBLUE,PINK, PURPLE } from "../../assets/colors";

import Card from "../../component/card";
import RoundedSquare from "../../component/roundedSquare";
import Header from "./component/header";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <View style={{ flex: 2, width: "100%" }}>
        <Header />
      </View>
      <View
        style={{
          width: "100%",
          height: "20%",
          flexDirection: "row",
        }}
      >
        <RoundedSquare color={DARKERORANGE}/>
        <RoundedSquare color={NAVYBLUE}/>
        <RoundedSquare  color={PINK}/>
        <RoundedSquare  color={PURPLE}/>
      </View>
      <View style={{ marginTop: "5%", flex: 1, width: "52%" }}>
        <Card />
      </View>
    </View>
  );
};

export default Home;
