import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 25,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    fontSize: 24,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#c9c9c9",
  },
});
