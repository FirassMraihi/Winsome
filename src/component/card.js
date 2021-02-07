import React from "react";
import { Image, View } from "react-native";
import {
  CardWrapper,
  BookButtonLabel,
  CardContent,
  ContentDescription,
  BookWrapper,
  RatingLabel,
  CardDescription,
  CardTitle,
} from "./style";

const Card = ({
  title = "RedBox Barber",
  description = "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  rating = "4.5",
  navigation
}) => {
  return (
    <CardWrapper>
      <View style={{ height: "60%" }}>
        <Image
          resizeMode={"stretch"}
          style={{
            height: "100%",
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={require("../assets/image/hair.jpeg")}
        />
      </View>

      <CardContent>
        <ContentDescription flexValue={"2"}>
          <CardTitle>{title}</CardTitle>
          <CardDescription numberOfLines={1}>{description}</CardDescription>
        </ContentDescription>
        <ContentDescription flexValue={"1"}>
          <View
            style={{
              alignSelf:'flex-end',
              width: "70%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Image
              resizeMode={"cover"}
              style={{
                height: "80%",
                width: "25%",
              }}
              source={require("../assets/image/star.png")}
            />
            <RatingLabel>{rating}</RatingLabel>
          </View>
          <BookWrapper  onPress={()=>navigation.navigate('Profil')}>
            <BookButtonLabel>Reservez</BookButtonLabel>
          </BookWrapper>
        </ContentDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
