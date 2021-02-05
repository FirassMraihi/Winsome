import React from "react";
import { View, SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Comment from "./comment";

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
      {data && data.map((element) => <Comment />)}
    </SafeAreaView>
  );
};

export default CommentsList;
