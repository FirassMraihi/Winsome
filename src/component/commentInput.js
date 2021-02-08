import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scaleSize } from "../assets/style/mixins";
import { PathLabel } from "../sceen/profil/style/style";
import RoundedInput from "./roundedInput";
import { CommentWrapper } from "./style";

const CommentInput = () => {
  return (
    <CommentWrapper style={{ paddingRight: "2%", alignContent: "center" }}>
      <Image
        style={{
          width: scaleSize(50),
          height: scaleSize(50),
          borderRadius: 100,
          alignSelf: "flex-start",
        }}
        resizeMode={"cover"}
        source={require("../assets/image/profilImage.jpg")}
      />
      <View style={{ height: scaleSize(50), width: "80%" }}>
        <View style={{ width: "95%" }}>
          <RoundedInput
            width={"100%"}
            height={"100%"}
            placeholder={"Veuillez laisser un commentaire"}
          />
        </View>

        <TouchableOpacity>
          <PathLabel style={{ alignSelf: "flex-end", paddingTop: "2%" }}>
            Publier
          </PathLabel>
        </TouchableOpacity>
      </View>
    </CommentWrapper>
  );
};

export default CommentInput;
