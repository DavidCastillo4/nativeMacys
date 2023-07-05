import { StyleSheet } from "react-native";

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
   backgroundColor: "#FFF",
   borderRadius: 12 / 1.25,
   justifyContent: "center",
   alignItems: "center",   
 },
 heart: (dim) => ({
  width: dim,
  height: dim,
  borderRadius: 12 / 1.25,  
  right: 29,
  top: -1,
  tintColor: "#F37453",
}),
cart: (dim) => ({
 width: dim,
 height: dim,
 borderRadius: 12 / 1.25,
 right: 10
}),
});

