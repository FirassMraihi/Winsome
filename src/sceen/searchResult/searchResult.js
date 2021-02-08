import React from "react";
import { View, Text } from "react-native";
import { scaleSize } from "../../assets/style/mixins";
import ListBlock from "../../component/listBlock";
import RoundedInput from "../../component/roundedInput";
import SearchCard from "../../component/searchCard";
import data from "../home/data";

const SearchResult = () => {
  return (
    <View
      style={{
        paddingLeft: "2%",
        height: "100%",
        width: "100%",
      }}
    >
      <View
        style={{
          height: "20%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RoundedInput />
      </View>
      <View
        style={{
          paddingTop: "1%",
          width: scaleSize(375),
          height: scaleSize(800),
        }}
      >
      <ListBlock
        data={data}
        elementWidth={'100%'}
        Component={<SearchCard />}
        title={"Resultats Trouvée"}
        onCLick={() => console.log("triggered")}
        horizontal={false}
        elementheight={scaleSize('90')}
      />
      </View>
    </View>
  );
};

export default SearchResult;
