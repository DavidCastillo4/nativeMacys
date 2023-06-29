import { StyleSheet } from "react-native";
import theme from '../../contants/theme/theme';

const css = StyleSheet.create({
  container: {
    marginTop: theme.SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.SIZES.small,
  },
  headerTitle: {
    fontSize: theme.SIZES.large,
    fontFamily: theme.FONT.medium,
    color: theme.COLORS.primary,
  },
  headerBtn: {
    fontSize: theme.SIZES.medium,
    fontFamily: theme.FONT.medium,
    color: theme.COLORS.gray,   
  },
  cardsContainer: {
    marginTop: theme.SIZES.medium,
    gap: theme.SIZES.small,
  },
});

export default css;
