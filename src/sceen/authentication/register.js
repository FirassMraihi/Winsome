import React from "react";
import { Text, View } from "react-native";
import { GAINSBRORO } from "../../assets/colors";
import { scaleSize } from "../../assets/style/mixins";
import RoundedButton from "../../component/roundedButton";
import RoundedInput from "../../component/roundedInput";
import { ListTitle, NoticeWrapper } from "../../component/style";
import {
  LabelNavigate,
  LabelNavigateWrapper,
  RegisterFormWrapper,
  RegisterWrapper,
} from "./style/style";

const Register = ({ navigation }) => {
  return (
    <RegisterWrapper>
      <ListTitle size={36}>S'Enregistrer</ListTitle>
      <RegisterFormWrapper>
        <View
          style={{
            width: "100%",
            height: scaleSize(60),
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedInput
            height={"70%"}
            color={GAINSBRORO}
            placeholder={"Login"}
          />
        </View> 
        <View
          style={{
            width: "100%",
            height: scaleSize(60),
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedInput
            height={"70%"}
            color={GAINSBRORO}
            placeholder={"Email"}
          />
        </View> 
        <View
          style={{
            width: "100%",
            height: scaleSize(60),
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedInput
            height={"70%"}
            color={GAINSBRORO}
            placeholder={"Numero de Telephone"}
          />
        </View> 
        <View
          style={{
            width: "100%",
            height: scaleSize(60),
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedInput
            height={"70%"}
            color={GAINSBRORO}
            placeholder={"Mot de Passe"}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: scaleSize(60),
            
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <RoundedInput
            height={"70%"}
            color={GAINSBRORO}
            placeholder={"Confirmation Mot de Passe"}
          />
        </View>
      </RegisterFormWrapper>
      <RoundedButton
        onPress={() => navigation.navigate("Login")}
        label={"S'Enregistrer"}
      />
      <NoticeWrapper>
        <Text>Vous avez déja un compte ? </Text>
        <LabelNavigateWrapper onPress={() => navigation.navigate("Login")}>
          <LabelNavigate>Se Connecter</LabelNavigate>
        </LabelNavigateWrapper>
      </NoticeWrapper>
    </RegisterWrapper>
  );
};

export default Register;
