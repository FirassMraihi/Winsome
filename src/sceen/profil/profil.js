import React from "react";
import { View, Text } from "react-native";
import { NameLabel, ProfilDescription, RatingWrapper } from "./style/style";
import { scaleSize } from "../../assets/style/mixins";

const Profil = ({
  name = "Daniel William",
  title = "Barberwomen at Redbox",
  rating = 2,
  reviews = "125",
}) => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ProfilDescription>
        <NameLabel>{name}</NameLabel>
        <Text>{title}</Text>
        <RatingWrapper>
          {/*   <Stars
            half={true}
            default={2.5}
            update={(val) => {
              this.setState({ stars: val });
            }}
            spacing={4}
            starSize={40}
            count={5}
            fullStar={require("./images/starFilled.png")}
            emptyStar={require("./images/starEmpty.png")}
            halfStar={require("./images/starHalf.png")}
        />*/}

          <Text>({reviews} Reviews)</Text>
        </RatingWrapper>
      </ProfilDescription>
    </View>
  );
};

export default Profil;
