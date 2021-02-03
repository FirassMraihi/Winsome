import React from "react";
import { Text } from "react-native";
import { DARKERORANGE } from "../assets/colors";
import { SquareImage, SquareNumber, SquareTitle, SquareWrapper } from "./style";

const RoundedSquare = ({
  color = DARKERORANGE,
  title = "Salon",
  number = "18",
}) => {
  return (
    <SquareWrapper>
      <SquareImage color={color}>
        <Text>Icon</Text>
      </SquareImage>
      <SquareTitle>{title}</SquareTitle>
      <SquareNumber>{number} Places</SquareNumber>
    </SquareWrapper>
  );
};

export default RoundedSquare;
