import React from "react";
import { SafeAreaView, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { scaleSize } from "../../../assets/style/mixins";
import { ListTitle } from "../../../component/style";
import { ServiceLabel, ServicePrice, ServiceWrapper } from "../style/style";
const data = [
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "broshing", price: "30" },
  { service: "Spa", price: "30" },
];
const Services = () => {
  return (
    <View style={{ height: "100%" }}>
      <ListTitle>Services</ListTitle>
      <View
        style={{
          paddingTop: "1.5%",
          height: "100%",
        }}
      >
        {data && data.map(item=>
          <ServiceWrapper>
            <ServiceLabel>{item.service}</ServiceLabel>
            <ServicePrice>{item.price} DT</ServicePrice>
          </ServiceWrapper>
        )}
      </View>
    </View>
  );
};

export default Services;
