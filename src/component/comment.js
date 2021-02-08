import React from "react";
import { Image, Text } from "react-native";
import { scaleSize } from "../assets/style/mixins";
import {
  CommentContent,
  CommentDescription,
  CommentWrapper,
  UserName,
} from "./style";

const Comment = ({
  name = "Alice",
  content = "something Special something Special something Special something Special something Special something Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Specialsomething Special something Special",
  imagePath,
}) => {
  return (
    <CommentWrapper>
    <Image
        style={{width:scaleSize(50),height:scaleSize(50),borderRadius:100,alignSelf:'flex-start'}}
        resizeMode={'cover'}
        source={require('../assets/image/profilImage.jpg')}
      />
      <CommentDescription>
        <UserName>{name}</UserName>
        <CommentContent>{content}</CommentContent>
      </CommentDescription>
    </CommentWrapper>
  );
};

export default Comment;
