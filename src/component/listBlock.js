import React from "react";
import { FlatList, TouchableOpacity, SafeAreaView, View } from "react-native";
import { scaleSize } from "../assets/style/mixins";
import { ListHeader, ListTitle, SeeMore, ListContainer } from "./style";

const ListBlock = ({
  title = "List Title",
  data,
  Component,
  onClick,
  elementWidth = scaleSize(70),
  horizontal = true,
  elementHeight = "75%",
  voirTout=true
}) => {
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        {voirTout && (
          <TouchableOpacity onPress={() => onClick}>
            <SeeMore>Voir Tout</SeeMore>
          </TouchableOpacity>
        )}
      </ListHeader>
      <FlatList
        style={{ height: "100%", width: "100%" }}
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={horizontal}
        renderItem={(element) => {
          let elementUi = React.cloneElement(Component, { ...element.item });
          return (
            <SafeAreaView
              style={{
                width: elementWidth,
                alignItems: "flex-start",
                height: elementHeight,
              }}
            >
              {elementUi}
            </SafeAreaView>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ListContainer>
  );
};

export default ListBlock;
