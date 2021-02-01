import React from "react";
import { Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CardWrapper, CardContent, ContentDescription } from "./style";

const Card = ({
  title = "RedBox Barber",
  description = "Lorem Ipsum",
  rating = "4.5",
}) => {
  return (
    <CardWrapper>
      <Image
        resizeMode={"cover"}
        style={{ flex: 1 }}
        source={require("../assets/image/hair.jpeg")}
      />
      <CardContent>
        <ContentDescription>
          <Text>{title}</Text>
          <Text>{description}</Text>
        </ContentDescription>
        <ContentDescription>
          <Text>{rating}</Text>
          <TouchableOpacity>
            <Text>Book</Text>
          </TouchableOpacity>
        </ContentDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
