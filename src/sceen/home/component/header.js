import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GAINSBRORO } from "../../../assets/colors";
import RoundedInput from "../../../component/roundedInput";
import { InputHeader } from "../../../component/style";
import { PathLabel } from "../../profil/style/style";
const Header = ({ user = "Jane", navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: "3%",
        paddingTop: "7%",
        paddingRight: "3%",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <InputHeader size={20}>Bonjour {user}</InputHeader>
        <View style={{ height: "40%", width: "100%", paddingTop: "5%" }}>
          <Text>Votre Position</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <InputHeader size={15}>San Fransisco city</InputHeader>
            <TouchableOpacity>
              <PathLabel size={13}>CHANGER</PathLabel>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            height: "35%",
            width: "100%",
            alignItems: "center",
            paddingTop: "2%",
          }}
        >
          <TouchableOpacity
            style={{ width: "100%", height: "90%",backgroundColor:GAINSBRORO,justifyContent:'center',borderRadius:10,paddingHorizontal:'5%' }}
            onPress={() => navigation.navigate("SearchFilter")}
          >
           <Text>Chercher un centre ou un Specialist</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
