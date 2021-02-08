import styled from "styled-components";
import {
  BLACK,
  GAINSBRORO,
  GRAY,
  LIGHTGREEN,
  PINK,
  SALAMON,
} from "../../../assets/colors";
import { scaleFont, scaleSize } from "../../../assets/style/mixins";

const ProfilDescription = styled.View`
  background-color: ${GAINSBRORO};
  display: flex;
  padding-top: 10%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: ${scaleSize(200)};
  width: 100%;
`;
const NameLabel = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: ${scaleFont(20)};
`;
const RatingWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ActionsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  height: 35%;
  margin-top: 4%;
  align-self: center;
`;
const AvatarWrapper = styled.View`
    height:60%;
    width:68%;
    align-self:center;
    margin-top:18%
    position:absolute;
    justify-content:center;
    align-items:center;
    z-index:10;
`;
const ProfilContent = styled.View`
  padding-top: 2%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-horizontal: 3%;
`;
const MenuWrapper = styled.View`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items:flex-end;
  background-color: ${GAINSBRORO};
`;
const MenuLabel = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: ${scaleFont(17)};
  border-bottom-width: 3px;
  border-color: linear-gradient(
    90deg,
    rgba(224, 2, 2, 1) 7%,
    rgba(255, 182, 0, 1) 10%
  );
`;
const PhotoListWrapper = styled.View`
  height: ${scaleSize(110)};
`;
const AddressContainer = styled.View`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const AddressDescription = styled.View`
  flex: 2;
`;
const PathLabel = styled.Text`
  color: ${PINK};
  font-size: ${({ size }) => (size ? size : scaleFont(15))};
`;
const ServiceLabel = styled.Text`
  color: ${GRAY};
  text-align: center;
  font-size: ${scaleFont(20)};
  font-weight: bold;
`;
const ServicePrice = styled.Text`
  color: ${SALAMON};
  font-size: ${scaleFont(20)};
  font-weight: bold;
  text-align: center;
`;
const ServiceWrapper = styled.View`
  padding-vertical: 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.3;
`;
export {
  ServiceWrapper,
  ServicePrice,
  ServiceLabel,
  PathLabel,
  AddressDescription,
  AddressContainer,
  PhotoListWrapper,
  MenuLabel,
  MenuWrapper,
  ProfilContent,
  AvatarWrapper,
  ActionsWrapper,
  RatingWrapper,
  ProfilDescription,
  NameLabel,
};
