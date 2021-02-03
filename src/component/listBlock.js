import React from "react";
import { FlatList, TouchableOpacity, SafeAreaView, View } from "react-native";
import { scaleSize } from "../assets/style/mixins";
import {
  ListHeader,
  ListTitle,
  SeeMore,
  ListContainer,
} from "./style";

const ListBlock = ({
  title = "List Title",
  data,
  Component,
  onClick,
  elementWidth=scaleSize(70),
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
        style={{ height:'100%'}}
        contentContainerStyle={{paddingTop:'0.5%',paddingRight:'50%',paddingLeft:'2%'}}
        data={data}
        ItemSeparatorComponent={() => <View style={{ width: "1%" }}></View>}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={(element) => {
          let elementUi = React.cloneElement(Component, { ...element.item });
          return (
            <SafeAreaView
              style={{
                width: elementWidth ,
                alignItems: "flex-start",
                height: "75%",
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
