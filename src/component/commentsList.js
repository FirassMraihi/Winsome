import React from "react";
import { View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GAINSBRORO, PINK, WHITE } from "../assets/colors";
import { scaleSize } from "../assets/style/mixins";
import Comment from "./comment";
import CommentInput from "./commentInput";
import ListBlock from "./listBlock";

const CommentsList = () => {
  const data = [
    "data",
    "data",
    "data",
    "data",
    "data",
    "data",
    "data",
    "data",
    "data",
    "data",
  ];
  return (
    <SafeAreaView
      style={{
        height: "100%",
        paddingTop: "4%",
        
      }}
    >
      <View style={{borderBottomWidth:0.3,borderColor:GAINSBRORO,height:'7%',alignContent:"center",justifyContent:'center'}}>
        <CommentInput />
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ListBlock
          voirTout={false}
          data={data}
          Component={<Comment />}
          title={""}
          onCLick={() => console.log("triggered")}
          horizontal={false}
          elementWidth={"100%"}
          elementHeight={scaleSize(100)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommentsList;
