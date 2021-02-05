import React from "react";
import { View } from "react-native";
import { scaleSize } from "../../../assets/style/mixins";
import Address from "./address";

const Informations = () => {
  return (
    <View style={{ height: scaleSize(110)}}>
      <Address />
    </View>
  );
};

export default Informations;
