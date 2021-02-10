import React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { scaleSize } from "../../assets/style/mixins";

import Card from "../../component/card";
import ListBlock from "../../component/listBlock";
import RoundedSquare from "../../component/roundedSquare";
import Header from "./component/header";
import data from "./data";

const Home = ({ navigation }) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View style={{ height: scaleSize(200), width: scaleSize(375) }}>
        <Header navigation={navigation} />
      </View>
      <View
        style={{
          width: scaleSize(375),
          height: scaleSize(165),
        }}
      >
        <ListBlock
          data={data}
          Component={<RoundedSquare navigation={navigation} />}
          title={"Top Categories"}
          onCLick={() => console.log("triggered")}
        />
      </View>
      <View
        style={{
          paddingTop: "1%",
          width: scaleSize(375),
          height: scaleSize(230),
        }}
      >
        <ListBlock
          title={"Top Salon"}
          data={data}
          navigation={navigation}
          elementWidth={scaleSize(240)}
          Component={<Card navigation={navigation} />}
          onCLick={() => console.log("triggered")}
        />
      </View>
      <View
        style={{
          paddingTop: "1%",
          width: scaleSize(375),
          height: scaleSize(230),
        }}
      >
        <ListBlock
          title={"Offres"}
          data={data}
          elementWidth={scaleSize(300)}
          Component={<Card />}
          onCLick={() => console.log("triggered")}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
