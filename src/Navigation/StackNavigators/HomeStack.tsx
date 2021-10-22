import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharactersList from "../../Screens/Characters";
import CharacterDetails from "../../Screens/Characters/CharacterDetails";

export type CharacterStackParamList = {
  CharactersList: undefined;
  CharacterDetails: {
    id: string;
  };
};

const CharacterStack = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<CharacterStackParamList>();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        options={{ headerShown: false }}
        name="CharactersList"
        component={CharactersList}
      />
      <Screen
        options={{ headerShown: false }}
        name="CharacterDetails"
        component={CharacterDetails}
      />
    </Navigator>
  );
};

export default CharacterStack;
