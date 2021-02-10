import React from "react";
import { View, Text } from "react-native";
import StatusLabel from "../../component/statusLabel";
import { ListTitle } from "../../component/style";

const SearchFilter = () => {
  return (
    <View
      style={{
        width: "98%",
        height: "90%",
        paddingLeft: "2%",
        paddingTop: "10%",
      }}
    >
      <View style={{ flex: 1 }}>
        <ListTitle>Services</ListTitle>
      </View>
      <View style={{ flex: 1 }}>
        <ListTitle>Rating</ListTitle>
      </View>
      <View style={{ flex: 1 }}>
        <ListTitle>Trier par</ListTitle>
        <View
          style={{
            paddingTop: "5%",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flex:1
          }}
        >
          <Text>Plus populaire</Text>
          <Text>Du cher vers bas prix</Text>
          <Text>Du bas vers cher prix</Text>
        </View>
      </View>
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      >
        <ListTitle>Prix</ListTitle>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignContent: "center",
            paddingTop: "5%",
          }}
        >
          <StatusLabel
            isRelative={true}
            paddingHorizontal={"10%"}
            status={"$"}
          />
          <StatusLabel
            isRelative={true}
            paddingHorizontal={"10%"}
            status={"$$"}
          />
          <StatusLabel
            isRelative={true}
            paddingHorizontal={"10%"}
            status={"$$$"}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchFilter;
