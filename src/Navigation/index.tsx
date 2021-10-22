import React from "react";
import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CharacterStack, {
  CharacterStackParamList,
} from "./StackNavigators/HomeStack";
export type RootStackParamList = {
  CharacterStack: NavigatorScreenParams<CharacterStackParamList>;
};

const RootStackNavigation = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  return (
    <Navigator>
      <Screen
        name="CharacterStack"
        component={CharacterStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootStackNavigation;
