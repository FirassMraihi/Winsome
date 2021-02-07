import styled from "styled-components";
import { BLACK, ORANGE, PINK, WHITE } from "../../../assets/colors";

const LoginWrapper = styled.View`
background-color:${WHITE}
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
const FormWrapper = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const LabelNavigate = styled.Text`
  color: ${PINK};
  font-weight: bold;
`;
const LabelNavigateWrapper = styled.TouchableOpacity`
  align-self: center;
`;
const RegisterWrapper = styled.View`
  background-color: ${WHITE};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const RegisterFormWrapper = styled.View`
background-color:${WHITE}
  height:40%;
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: center;
`;

export {
  RegisterFormWrapper,
  LabelNavigateWrapper,
  LoginWrapper,
  LabelNavigate,
  FormWrapper,
  RegisterWrapper,
};
