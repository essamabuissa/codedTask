import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 5,
    shadowOpacity: 0.1,
    backgroundColor: "white",
  },
  image: {
    padding: 50,
    borderTopLeftRadius: 10,
  },
  linkButton: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    width: "35%",
    marginTop: 10,
    backgroundColor: "lightblue",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 5,
  },
  row: {
    flexDirection: "row",
  },
});
