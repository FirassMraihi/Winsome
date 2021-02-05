import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { INFORMATIONS, PORTFOLIO, REVIEW } from "../constants";
import { MenuWrapper, MenuLabel } from "../style/style";

const Menu = ({toggleMenu}) => {
  return (
    <MenuWrapper>
      <TouchableOpacity onPress={()=>toggleMenu(INFORMATIONS)}>
        <MenuLabel>Informations</MenuLabel>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>toggleMenu(PORTFOLIO)}>
        <MenuLabel>Portfolio</MenuLabel>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>toggleMenu(REVIEW)}>
        <MenuLabel>Review</MenuLabel>
      </TouchableOpacity>
    </MenuWrapper>
  );
};

export default Menu;
