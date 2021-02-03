import styled from "styled-components";
import { BLACK, DARKERORANGE, DARKGRAY, GRAY, SILVER, WHITE } from "../assets/colors";
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
  padding-vertical:21%;
  padding-horizontal:10%;
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
  height:100%;
  display: flex;
  flex-direction: column;
`;
const ListTitle =styled.Text`
 color:${BLACK};
 font-weight:bold;
 font-size:${scaleFont(20)};
`
const SeeMore=styled.Text`
color:${GRAY};
font-weight:bold;
font-size:${scaleFont(15)};
`
export {
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
