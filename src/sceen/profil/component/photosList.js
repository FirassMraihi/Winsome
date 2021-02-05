import React from "react";
import { View, Text } from "react-native";
import ListBlock from "../../../component/listBlock";
import { PhotoListWrapper } from "../style/style";
import PhotoBlock from "./photoBlock";

const PhotosList = () => {
  return (
    <PhotoListWrapper>
      <ListBlock
        data={['photo1',"photo2","photo2","photo2","photo2","photo2","photo2"]}
        Component={<PhotoBlock />}
        title={"Photos"}
        elementWidth={60}
        onCLick={() => console.log("triggered")}
      />
    </PhotoListWrapper>
  );
};

export default PhotosList;
