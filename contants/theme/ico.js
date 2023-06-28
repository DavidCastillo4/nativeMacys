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
  btnContainer2: {
   display: 'flex',
   flexDirection: "row",
   width: 40,
   height: 40,
   //backgroundColor: "#F3F4F8",
   backgroundColor: "#FFF",
   borderRadius: 12 / 1.25,
   justifyContent: "center",
   alignItems: "center",
   marginRight: 40,   
 },
 img2: (dim) => ({
  width: dim,
  height: dim,
  borderRadius: 12 / 1.25,
  marginRight: 22,
  tintColor: "#F37453",

}),
});

