import { StyleSheet } from "react-native";
import theme from '../../contants/theme/theme';

const css = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: theme.FONT.regular,
    fontSize: theme.SIZES.large,
    color: theme.COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: theme.FONT.bold,
    fontSize: theme.SIZES.xLarge,
    color: theme.COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: theme.SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: theme.COLORS.white,
    marginRight: theme.SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: theme.FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: theme.SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: theme.COLORS.tertiary,
    borderRadius: theme.SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: theme.COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: theme.SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: theme.SIZES.small / 2,
    paddingHorizontal: theme.SIZES.small,
    borderRadius: theme.SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? theme.COLORS.secondary : theme.COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: theme.FONT.medium,
    color: activeJobType === item ? theme.COLORS.secondary : theme.COLORS.gray2,
  }),
});

export default css;
