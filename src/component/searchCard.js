import React from "react";
import { Text, Image, View } from "react-native";
import { InputHeader, SearchCardWrapper } from "./style";

const SearchCard = ({
  title = "Redbox Barber",
  description = "something somethingsomethingsomethingsomething",
}) => {
  return (
    <SearchCardWrapper>
      <View style={{ height: "90%", width: "25%" }}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            borderRadius: 10,
          }}
          source={require("../assets/image/malibu.jpeg")}
        />
      </View>

      <View style={{ width: "72%", height: "100%", paddingLeft: "3%" }}>
        <InputHeader size={15}>{title}</InputHeader>
        <View style={{ flexDirection: "row", height: "15%", width: "5%" }}>
          <Image
            resizeMode={"stretch"}
            style={{
              height: "100%",
              width: "100%",
            }}
            source={require("../assets/image/star.png")}
          />
          <Image
            resizeMode={"stretch"}
            style={{
              height: "100%",
              width: "100%",
            }}
            source={require("../assets/image/star.png")}
          />
        </View>

        <Text numberOfLines={2}>{description}</Text>
      </View>
    </SearchCardWrapper>
  );
};

export default SearchCard;
