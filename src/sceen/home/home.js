import React from "react";
import { View, Text } from "react-native";
import { DARKERORANGE, NAVYBLUE, PINK, PURPLE } from "../../assets/colors";

import Card from "../../component/card";
import ListBlock from "../../component/listBlock";
import RoundedSquare from "../../component/roundedSquare";
import Header from "./component/header";
import data from "./data";

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
      <View style={{ height:'40%', width: "100%" }}>
        <Header />
      </View>
      <View
        style={{
          width: "100%",
          height: "20%",
          flexDirection: "row",
        }}
      >
        <ListBlock
          data={data}
          Component={<RoundedSquare />}
          title={'Top Categories'}
          onCLick={() => console.log("triggered")}
        />
      </View>
      <View style={{ paddingTop: "5%", height:"30%", width: "100%" }}>
       
        <ListBlock
         title={'Top Salon'}
          data={data}
          elementWidth={300}
          Component={ <Card />}
          onCLick={() => console.log("triggered")}
        />
      </View>
    </View>
  );
};

export default Home;
