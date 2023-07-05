import { StyleSheet } from "react-native";
import theme from '../../contants/theme/theme';

let css = StyleSheet.create({
  container: {
    //position: "absolute",
    // bottom: 0,
    // left: 0,
    // right: 0,
    padding: theme.SIZES.small,
    backgroundColor: "#FFF",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: '100%'
  },
  likeBtn: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderColor: "#F37453",
    borderRadius: theme.SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  likeBtnImage: {
    width: "40%",
    height: "40%",
    tintColor: "#F37453",
  },
  applyBtn: {
    flex: 1,
    backgroundColor: "#FE7654",    
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.SIZES.medium,
    borderRadius: theme.SIZES.medium,
  },
  applyBtnText: {
    fontSize: theme.SIZES.medium,
    color: theme.COLORS.white,
    fontFamily: theme.FONT.bold,    
  },
});

export default css;
