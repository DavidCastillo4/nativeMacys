import { StyleSheet } from "react-native";
import theme from "../../contants/theme/theme";

let css = StyleSheet.create({
 container: {
  marginVertical: theme.SIZES.medium,
  alignItems: "center",
  //width: 390,
 },
 logoBox: {
  width: 380,
  height: 500,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFF",
  borderRadius: theme.SIZES.large,
 },
 logoImage: {
  width: "100%",
  height: "100%",
 },
 jobTitleBox: {
  marginTop: theme.SIZES.small,
 },
 jobTitle: {
  fontSize: theme.SIZES.large,
  color: theme.COLORS.primary,
  fontFamily: theme.FONT.bold,
  textAlign: "center",
 },
 companyInfoBox: {
  marginTop: theme.SIZES.small / 2,
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
 },
 companyName: {
  fontSize: theme.SIZES.medium - 2,
  color: theme.COLORS.primary,
  fontFamily: theme.FONT.medium,
 },
 locationBox: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
 },
 locationImage: {
  width: 14,
  height: 14,
  tintColor: theme.COLORS.gray,
 },
 locationName: {
  fontSize: theme.SIZES.medium - 2,
  color: theme.COLORS.gray,
  fontFamily: theme.FONT.regular,
  marginLeft: 2,
 },
});

export default css;
