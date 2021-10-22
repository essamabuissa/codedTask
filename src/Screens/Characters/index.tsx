import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ListRenderItem,
  Image,
  ActivityIndicator,
} from "react-native";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import { FETCH_CHARACTERS } from "../../GraphQL/CharactersGraphQl";
import { CharacterInterface } from "../../Types";
import { styles } from "./styles";
import { useLinkTo } from "@react-navigation/native";

const CharactersList = () => {
  const { loading, data } = useQuery(FETCH_CHARACTERS);
  const characters = data?.characters?.results;
  const linkTo = useLinkTo();
  const navigateToDetails = (item: CharacterInterface) => {
    linkTo(`/characters/${item?.id}`);
  };
  //   /${item?.status}/${item?.gender}/${item?.species}
  const renderItem: ListRenderItem<CharacterInterface> | null | undefined = ({
    item,
  }) => {
    return (
      <CharacterCard
        onPress={() => navigateToDetails(item)}
        to={{ screen: "CharacterDetails", params: { character: item } }}
        character={item}
      />
    );
  };
  return (
    <>
      {loading ? (
        <ActivityIndicator
          size="small"
          color="black"
          style={{ marginTop: 50 }}
        />
      ) : (
        <View style={styles.container}>
          <SafeAreaView />
          <Image
            source={{
              uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg",
            }}
            style={styles.logo}
          />
          <FlatList
            contentContainerStyle={styles.list}
            data={characters}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.5}
          />
        </View>
      )}
    </>
  );
};

export default CharactersList;
