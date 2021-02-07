import React from "react";
import RoundedInput from "../../component/roundedInput";
import RoundedButton from "../../component/roundedButton";
import { ListTitle, NoticeWrapper } from "../../component/style";
import { FormWrapper, LoginWrapper,LabelNavigateWrapper,LabelNavigate } from "./style/style";
import { GAINSBRORO } from "../../assets/colors";
import { Text } from "react-native";
import { scaleSize } from "../../assets/style/mixins";
const Login = ({ navigation }) => {
  return (
    <LoginWrapper>
      <ListTitle size={36}>Se Connecter</ListTitle>
      <FormWrapper>
        <RoundedInput height={scaleSize(45)} color={GAINSBRORO} placeholder={"Email"} />
        <RoundedInput height={scaleSize(45)} color={GAINSBRORO} placeholder={"Mot de Passe"} />
      </FormWrapper>
      <RoundedButton
        onPress={() => navigation.navigate("Home")}
        label={"Se Connecter"}
      />
      <NoticeWrapper>
        <Text>Vous n'avez pas un compte ?  </Text>
        <LabelNavigateWrapper onPress={() => navigation.navigate("Register")}>
          <LabelNavigate>S'Enregistrer</LabelNavigate>
        </LabelNavigateWrapper>
      </NoticeWrapper>
    </LoginWrapper>
  );
};

export default Login;
