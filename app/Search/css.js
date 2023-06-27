import { StyleSheet } from "react-native";
import theme from "../../contants/theme/theme";

const css = StyleSheet.create({
  container: {
    marginTop: theme.SIZES.large,
    backgroundColor: "#FFF",
    borderRadius: theme.SIZES.medium,
    padding: theme.SIZES.medium,
  },
  title: {
    fontSize: theme.SIZES.large,
    color: theme.COLORS.primary,
    fontFamily: theme.FONT.bold,
  },
  pointsContainer: {
    marginVertical: theme.SIZES.small,
  },
  pointWrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: theme.SIZES.small / 1.25,
  },
  pointDot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: theme.COLORS.gray2,
    marginTop: 6,
  },
  pointText: {
    fontSize: theme.SIZES.medium - 2,
    color: theme.COLORS.gray,
    fontFamily: theme.FONT.regular,
    marginLeft: theme.SIZES.small,
  },
});

export default css;
