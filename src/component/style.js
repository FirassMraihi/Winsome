import styled from "styled-components";

const CardWrapper = styled.View`
  border-bottom-width: 1;
  border-left-width: 0.5;
  border-right-width: 0.5;
  border-color: gray;
  border-radius: 10;
  display: flex;
  flex-direction: column;
`;
const CardContent = styled.View`
  padding-top: 2%;
  width: 100%;
  height: 50%;
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
  width: 90%;
  position:absolute;
  bottom:20%;
  height: 30%;
  justify-content: center;
  align-items: center;
  background-color: #E86656;
  border-top-left-radius: 10;
  border-bottom-right-radius: 5;
`;
const BookButtonLabel = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 17;
  padding-vertical: 5%;
  padding-horizontal: 5%;
`;
const RatingLabel=styled.Text`
align-self:flex-end;
font-size:17;
padding-right:15%;
`

const CardDescription=styled.Text`
`
const CardTitle = styled.Text`
 color:black;
 font-size:20;
`
export {
  RatingLabel,
  BookButtonLabel,
  CardWrapper,
  CardContent,
  ContentDescription,
  BookWrapper,
  CardDescription,
  CardTitle
};
