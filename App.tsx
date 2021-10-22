import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigation from "./src/Navigation";
import * as Linking from "expo-linking";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const prefix = Linking.createURL("/");
const config = {
  screens: {
    CharacterStack: {
      screens: {
        Characters: "characters",
        CharacterDetails: {
          path: "characters/:id",
        },
      },
    },
  },
};
export default function App() {
  const linking = {
    prefixes: [prefix],
    config,
  };
  return (
    <ApolloProvider client={client}>
      <NavigationContainer linking={linking}>
        <RootStackNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}
