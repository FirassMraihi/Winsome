import React from "react";
import { View, Text } from "react-native";

const Card = ({
  title = "RedBox Barber",
  description = "Lorem Ipsum",
  rating = "4.5",
}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{rating}</Text>
    </View>
  );
};

export default Card;
