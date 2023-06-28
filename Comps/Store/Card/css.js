import { StyleSheet } from "react-native";
import theme from "../../../contants/theme/theme";

const css = StyleSheet.create({
 container: (selectedJob, item) => ({
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  padding: theme.SIZES.medium,
  borderRadius: theme.SIZES.small,  
  backgroundColor: selectedJob === item.id ? theme.COLORS.primary : "#FFF",
  ...theme.SHADOWS.medium,
  shadowColor: theme.COLORS.white,
 }),

 logoContainer: {
  width: 50,
  height: 50,
  backgroundColor: theme.COLORS.white,
  borderRadius: theme.SIZES.medium,
  justifyContent: "center",
  alignItems: "center",
 },
 logImage: {
  width: "70%",
  height: "70%",
 },
 textContainer: {
  flex: 1,
  marginHorizontal: theme.SIZES.medium,
 },
 jobName: (selectedJob, item) => ({
  fontSize: theme.SIZES.medium,
  fontFamily: "DMBold",
  color: selectedJob === item.id ? theme.COLORS.white : theme.COLORS.primary,
 }),
 jobType: {
  fontSize: theme.SIZES.small + 2,
  fontFamily: "DMRegular",  
  color: "#B3AEC6",
  marginTop: 3,
  textTransform: "capitalize",
 },
});

export default css;
