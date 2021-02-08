import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GAINSBRORO } from "../assets/colors";

const SearchCard = () => {
  return (
    <TouchableOpacity
      style={{
        borderBottomColor: GAINSBRORO,
        borderBottomWidth:0.5,
        width: "100%",
        height:'100%',
        flexDirection: "row"
      }}
    >
      <Image
        style={{
          width: '40%',
          height:'90%',
          borderRadius: 50,
          alignSelf: "center",
        }}
        resizeMode={"stretch"}
        source={require("../assets/image/profilImage.jpg")}
      />
      <View style={{ width: "60%",paddingLeft:'2%'}}>
        <Text>hello</Text>
        <Text>hello ther</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;
