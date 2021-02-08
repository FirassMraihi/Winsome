import React from "react";
import { Text } from "react-native";
import { DARKERORANGE, WHITE } from "../assets/colors";
import { SquareImage, SquareNumber, SquareTitle, SquareWrapper } from "./style";

const RoundedSquare = ({
  color = DARKERORANGE,
  title = "Salon",
  number = "18",
  navigation
}) => {
  return (
    <SquareWrapper onPress={()=>navigation.navigate('SearchResult')}>
      <SquareImage color={color}>
        <Text style={{ color: WHITE }}>Icon</Text>
      </SquareImage>
      <SquareTitle>{title}</SquareTitle>
      <SquareNumber>{number} Places</SquareNumber>
    </SquareWrapper>
  );
};

export default RoundedSquare;
