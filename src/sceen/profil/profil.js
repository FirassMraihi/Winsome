import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  ActionsWrapper,
  NameLabel,
  ProfilContent,
  ProfilDescription,
  RatingWrapper,
} from "./style/style";
import {
  CircularWrapper,
  GeneralInfo,
  CoverImageContainer,
} from "../../component/style";
import { ORANGE, PURPLE, SALAMON } from "../../assets/colors";
import Wallpaper from "./component/wallpaper";
import Avatar from "./component/avatar";
import Menu from "./component/menu";
import Informations from "./component/informations";
import PhotosList from "./component/photosList";
import StatusLabel from "../../component/statusLabel";
import { ScrollView } from "react-native-gesture-handler";
import Services from "./component/services";
import { INFORMATIONS, REVIEW } from "./constants";
import CommentsList from "../../component/commentsList";

const Profil = ({
  name = "Daniel William",
  title = "Barberwomen at Redbox",
  rating = 2,
  reviews = "125",
}) => {
  const [toggle, setToggle] = useState("informations");
  const toggleMenu = (value) => {
    setToggle(() => value);
  };
  return (
    <ScrollView style={{ width:'100%',height:'100%'}}>
      <CoverImageContainer>
        <Wallpaper />
        <StatusLabel />
        <Avatar />
      </CoverImageContainer>
      <ProfilDescription>
        <GeneralInfo>
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
        </GeneralInfo>
        <ActionsWrapper>
          <CircularWrapper color={ORANGE} />
          <CircularWrapper color={PURPLE} />
          <CircularWrapper color={SALAMON} />
          <CircularWrapper color={PURPLE} />
        </ActionsWrapper>
        <View
          style={{
            width: "100%",
            height: "18%",
            marginTop: "2%",
            //alignItems:'flex-end',
            justifyContent: "flex-end",
          }}
        >
          <Menu toggleMenu={toggleMenu} />
        </View>
      </ProfilDescription>

      {toggle === INFORMATIONS && (
        <ProfilContent>
          <PhotosList />
          <Informations />
          <Services />
        </ProfilContent>
      )}

      {toggle === REVIEW && <CommentsList />}
    </ScrollView>
  );
};

export default Profil;
