import styled from "styled-components";

const CardWrapper = styled.View`
  background-color: red;
  border-radius: 10;
  display: flex;
  flex-direction: column;
`;
const CardContent = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  background-color: blue;
  align-items:center;
  justify-content:space-between;
`;
const ContentDescription = styled.View`
  width:20%;
  height:100%;
background-color:green;
  display: flex;
`;
export { CardWrapper, CardContent, ContentDescription };
