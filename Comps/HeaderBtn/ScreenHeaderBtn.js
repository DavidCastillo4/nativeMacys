import { Image, TouchableOpacity } from "react-native";
import { styles } from "./css";

export let ScreenHeaderBtn = ({img, dim, press}) => {
 return (
  <TouchableOpacity style={styles.btnContainer} onPress={press} >
   <Image
    source={img}
    resizeMode='cover'
    style={styles.btnImg(dim)}
   />
  </TouchableOpacity>
 );
};
