import { StyleSheet } from "react-native";
import theme from "../../contants/theme/theme";

let tab = StyleSheet.create({
 container: {
  marginTop: theme.SIZES.small,
  marginBottom: theme.SIZES.small / 2,
  height: 50
 },
 btn: (name, activeTab) => ({
  paddingVertical: theme.SIZES.medium,
  paddingHorizontal: theme.SIZES.xLarge,
  backgroundColor: name === activeTab ? theme.COLORS.primary : "#F3F4F8",
  borderRadius: theme.SIZES.medium,
  marginLeft: 2,
  ...theme.SHADOWS.medium,
  shadowColor: theme.COLORS.white,
 }),
 btnText: (name, activeTab) => ({
  fontFamily: "DMMedium",
  fontSize: theme.SIZES.small,
  color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
 }),

 containerBox: {
  flex: 1, alignItems: 'center', justifyContent: 'flex-start',
  marginTop: theme.SIZES.large,
  backgroundColor: "#FFF",
  borderRadius: theme.SIZES.medium,
  padding: theme.SIZES.medium
 },
 headText: {
  fontSize: theme.SIZES.large,
  color: theme.COLORS.primary,
  fontFamily: theme.FONT.bold,
 }
});

export default tab;
