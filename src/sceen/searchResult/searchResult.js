import React from "react";
import { View, Text } from "react-native";
import { scaleSize } from "../../assets/style/mixins";
import ListBlock from "../../component/listBlock";
import RoundedInput from "../../component/roundedInput";
import SearchCard from "../../component/searchCard";
import data from "../home/data";

const SearchResult = () => {
  return (
    <View style={{ paddingTop: "10%", height: "100%", width: "100%" }}>
      <View
        style={{
          height: "10%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RoundedInput height={"70%"} width={"80%"} />
      </View>
      <View
        style={{
          paddingTop: "1%",
          width: "100%",
          height: "90%",
        }}
      >
        <ListBlock
          voirTout={false}
          data={data}
          Component={<SearchCard />}
          title={"Resultats Trouvée"}
          onCLick={() => console.log("triggered")}
          horizontal={false}
          elementWidth={"100%"}
          elementHeight={scaleSize(100)}
        />
      </View>
    </View>
  );
};

export default SearchResult;
