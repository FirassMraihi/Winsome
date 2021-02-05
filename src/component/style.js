import styled from "styled-components";
import {
  BLACK,
  DARKERORANGE,
  DARKGRAY,
  GRAY,
  PINK,
  WHITE,
} from "../assets/colors";
import { scaleFont, scaleSize } from "../assets/style/mixins";

const CardWrapper = styled.View`
  border-bottom-width: 0.5;
  border-left-width: 0.2;
  border-right-width: 0.2;
  border-color: gray;
  border-radius: 10;
  display: flex;
  flex-direction: column;
`;
const CardContent = styled.View`
  padding-top: 2%;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ContentDescription = styled.View`
  padding-left: 5%;
  width: 40%;
  height: 100%;
  display: flex;
  flex: ${(props) => props.flexValue};
`;
const BookWrapper = styled.TouchableOpacity`
  align-self: flex-end;
  width: 95%;
  position: absolute;
  padding-vertical: 21%;
  padding-horizontal: 10%;
  bottom: 44%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: ${DARKERORANGE};
  border-top-left-radius: 10;
  border-bottom-right-radius: 10;
`;
const BookButtonLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${scaleSize(11)};
`;
const RatingLabel = styled.Text`
  align-self: flex-end;
  font-size: 17;
  padding-right: 15%;
`;

const CardDescription = styled.Text``;
const CardTitle = styled.Text`
  color: black;
  font-size: 20;
`;

const TextInputStyle = styled.TextInput`
  background-color: ${WHITE};
  border-radius: 10;
  width: 80%;
  height: 30%;
  padding: 1%;
  color: ${BLACK};
`;
const InputHeader = styled.Text`
  color: ${WHITE};
  font-size: ${scaleFont(18)};
  font-weight: bold;
`;

const SquareWrapper = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;
const SquareImage = styled.View`
  justify-content: center;
  height: 60%;
  width: 100%;
  align-items: center;
  border-radius: 10;
  background-color: ${(props) => props.color};
`;
const SquareTitle = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: ${scaleFont(15)};
`;
const SquareNumber = styled.Text`
  color: ${DARKGRAY};
  font-size: ${scaleFont(12)};
`;
const ListHeader = styled.View`
  display: flex;
  padding-left: 2%;
  padding-right: 5%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ListContent = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const ListContainer = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ListTitle = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: ${scaleFont(20)};
`;
const SeeMore = styled.Text`
  color: ${GRAY};
  font-weight: bold;
  font-size: ${scaleFont(15)};
`;
const CircularWrapper = styled.TouchableOpacity`
  background-color: ${(props) => (props.color ? props.color : PINK)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : `15%`)};
  border-radius: 100;
`;
const CoverImageContainer = styled.View`
  width: 100%;
  height: ${scaleSize(120)};
`;
const GeneralInfo = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StatusWrapper = styled.Text`
  color: ${(props) => (props.status === "Ouvert" ? "green" : "red")};
  text-align: center;
  border-width: 1px;
  border-color: ${(props) => (props.status === "Ouvert" ? "green" : "red")};
  border-radius: 10;
  position: absolute;
  margin-top: 140;
  margin-left: 5;
  padding-horizontal: 2%;
  padding-vertical: 1%;
  z-index: 10;
`;
const CommentWrapper = styled.View`
  padding-vertical: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left:1%;
  margin-right:1%;
  color: ${GRAY};
`;
const CommentDescription = styled.View`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 1%;
`;
const CommentContent = styled.Text`
  font-size: ${scaleFont(14)};
`;
const UserName = styled.Text`
  font-size: ${scaleFont(17)};
  color: ${BLACK};
`;
export {
  UserName,
  CommentContent,
  CommentDescription,
  CommentWrapper,
  StatusWrapper,
  GeneralInfo,
  CoverImageContainer,
  CircularWrapper,
  SeeMore,
  ListTitle,
  ListContainer,
  ListContent,
  ListHeader,
  SquareNumber,
  SquareTitle,
  SquareImage,
  SquareWrapper,
  InputHeader,
  RatingLabel,
  BookButtonLabel,
  CardWrapper,
  CardContent,
  ContentDescription,
  BookWrapper,
  CardDescription,
  CardTitle,
  TextInputStyle,
};
