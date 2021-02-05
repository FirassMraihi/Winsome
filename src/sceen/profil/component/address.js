import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GRAY } from "../../../assets/colors";
import { ListTitle } from "../../../component/style";
import {
  AddressContainer,
  PathLabel,
  AddressDescription,
} from "../style/style";

const Address = ({
  address = "rue 6548 maison 1rue 6548 maison 1rue 6548 maison 1rue 6548 maison 1rue 6548 maison 1",
}) => {
  return (
    <AddressContainer>
      <AddressDescription>
        <ListTitle>Address</ListTitle>
        <Text numberOfLines={2}>{address}</Text>
        <TouchableOpacity>
          <PathLabel>Avoir le Téméraire</PathLabel>
        </TouchableOpacity>
      </AddressDescription>
      <View style={{ flex: 1, backgroundColor: GRAY }}>
        <Text>map</Text>
      </View>
    </AddressContainer>
  );
};

export default Address;
