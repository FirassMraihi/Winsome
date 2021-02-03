import React from "react";
import { FlatList, TouchableOpacity, SafeAreaView, View } from "react-native";
import {
  ListHeader,
  ListTitle,
  ListContent,
  SeeMore,
  ListContainer,
} from "./style";

const ListBlock = ({
  title = "List Title",
  data,
  Component,
  onClick,
  elementWidth=80,
}) => {
  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
        <TouchableOpacity onPress={() => onClick}>
          <SeeMore>Voir Tout</SeeMore>
        </TouchableOpacity>
      </ListHeader>
      <FlatList
        style={{ paddingLeft: "1%",height:'100%'}}
        contentContainerStyle={{paddingTop:'1%'}}
        data={data}
        ItemSeparatorComponent={() => <View style={{ width: "2%" }}></View>}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={(element) => {
          let elementUi = React.cloneElement(Component, { ...element.item });
          return (
            <SafeAreaView
              style={{
                width: elementWidth ,
                alignItems: "flex-start",
                height: "88%",
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
