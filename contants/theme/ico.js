import { StyleSheet } from "react-native";
//import theme from '../theme/theme';

export let ico = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F3F4F8",
    borderRadius: 12 / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },
  img: (dim) => ({
    width: dim,
    height: dim,
    borderRadius: 12 / 1.25,
  }),
});

