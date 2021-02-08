import React from "react";
import { View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { GAINSBRORO, PINK, WHITE } from "../assets/colors";
import Comment from "./comment";
import CommentInput from "./commentInput";

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
        paddingTop: "1%",
        
      }}
    >
      <View style={{borderBottomWidth:0.3,borderColor:GAINSBRORO,height:'4%',alignContent:"center",justifyContent:'center'}}>
        <CommentInput />
      </View>
      {data && data.map((element) => <Comment />)}
    </SafeAreaView>
  );
};

export default CommentsList;
