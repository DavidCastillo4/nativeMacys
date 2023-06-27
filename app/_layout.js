import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {

 let [fontsLoaded] = useFonts({
  DMBold: require("../contants/fonts/DMSans-Bold.ttf"),
  DMMedium: require("../contants/fonts/DMSans-Medium.ttf"),
  DMRegular: require("../contants/fonts/DMSans-Regular.ttf"),
});

if (!fontsLoaded) {
 return null;
}

 return <Stack />;
}

