import { StyleSheet } from "react-native";
import theme from "../../../contants/theme/theme";

const css = StyleSheet.create({
 container: (selectedJob, item) => ({
  width: 250,
  padding: theme.SIZES.xLarge,
  backgroundColor: selectedJob === item.id ? theme.COLORS.primary : "#FFF",
  borderRadius: theme.SIZES.medium,
  justifyContent: "space-between",
  ...theme.SHADOWS.medium,
  shadowColor: theme.COLORS.white,
 }),
 
 logoContainer: (selectedJob, item) => ({
  width: 50,
  height: 50,
  backgroundColor: selectedJob === item.id ? "#FFF" : theme.COLORS.white,
  borderRadius: theme.SIZES.medium,
  justifyContent: "center",
  alignItems: "center",
 }),


 logoImage: {
  width: "70%",
  height: "70%",
 },
 companyName: {
  fontSize: theme.SIZES.medium,
  fontFamily: theme.FONT.regular,
  color: "#B3AEC6",
  marginTop: theme.SIZES.small / 1.5,
 },
 infoContainer: {
  marginTop: theme.SIZES.large,
 },
 jobName: (selectedJob, item) => ({
  fontSize: theme.SIZES.large,
  fontFamily: theme.FONT.medium,
  color: selectedJob === item.id ? theme.COLORS.white : theme.COLORS.primary,
 }),
 infoWrapper: {
  flexDirection: "row",
  marginTop: 5,
  justifyContent: "flex-start",
  alignItems: "center",
 },
 publisher: (selectedJob, item) => ({
  fontSize: theme.SIZES.medium - 2,
  fontFamily: theme.FONT.regular,
  color: selectedJob === item.id ? theme.COLORS.white : theme.COLORS.primary,
 }),
 location: {
  fontSize: theme.SIZES.medium - 2,
  fontFamily: theme.FONT.regular,
  color: "#B3AEC6",
 },
});

export default css;
