import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { CharacterStackParamList } from "../../../Navigation/StackNavigators/HomeStack";
import { styles } from "./styles";
import { EpisodeInterface } from "../../../Types";
import { useQuery } from "@apollo/client";
import { CHARACTER_BY_ID } from "../../../GraphQL/CharactersGraphQl";

type CharacterDetailsScreenRouteProp = RouteProp<
  CharacterStackParamList,
  "CharacterDetails"
>;

interface CharacterDetailsProps {
  route: CharacterDetailsScreenRouteProp;
}

const CharacterDetails = ({ route }: CharacterDetailsProps) => {
  const { id } = route?.params;
  const { loading, data } = useQuery(CHARACTER_BY_ID, {
    variables: { id },
  });
  const character = data?.character;

  const renderItem: ListRenderItem<EpisodeInterface> | null | undefined = ({
    item,
  }) => {
    return (
      <View style={styles.episode}>
        <Text style={styles.episodeName}>{item.name}</Text>
      </View>
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
          <Image style={styles.image} source={{ uri: character?.image }} />
          <View style={styles.body}>
            <Text style={styles.name}>{character?.name}</Text>
            {character?.status !== "unknown" && (
              <Text style={styles.title}>
                Status:{" "}
                <Text
                  style={{
                    ...styles.status,
                    color: character?.status === "Dead" ? "red" : "green",
                  }}
                >
                  {character?.status}
                </Text>
              </Text>
            )}
            <Text style={styles.title}>
              Species: <Text style={styles.species}>{character?.species}</Text>
            </Text>
            {character?.status !== "unknown" && (
              <Text style={styles.title}>
                Gender: <Text style={styles.gender}>{character?.gender}</Text>
              </Text>
            )}
          </View>
          <FlatList
            horizontal
            style={styles.list}
            data={character?.episode}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </>
  );
};

export default CharacterDetails;
