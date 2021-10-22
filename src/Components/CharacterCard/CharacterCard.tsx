import { ParamListBase } from "@react-navigation/native";
import { To } from "@react-navigation/native/lib/typescript/src/useLinkTo";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { CharacterInterface } from "../../Types";
import { styles } from "./styles";

interface CharacterCardProps {
  character: CharacterInterface;
  to: To<ParamListBase>;
  onPress: () => void;
}

const CharacterCard = ({ character, onPress }: CharacterCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={{
            uri: character?.image,
          }}
        />
        <Text style={styles.name}>{character?.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;
