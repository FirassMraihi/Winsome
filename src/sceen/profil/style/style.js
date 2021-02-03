import styled from "styled-components";
import { BLACK, GAINSBRORO } from "../../../assets/colors";
import { scaleFont } from "../../../assets/style/mixins";

const ProfilDescription = styled.View`
  background-color: ${GAINSBRORO};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  width: 100%;
`;
const NameLabel = styled.Text`
  color: ${BLACK};
  font-weight: bold;
  font-size: ${scaleFont(20)};
`;
const RatingWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;
export { RatingWrapper, ProfilDescription, NameLabel };
