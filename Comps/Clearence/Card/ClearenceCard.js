import { View, Text, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import css from "./css";
import { useRouter } from "expo-router";
import { st } from '../../../state/state';

let ClearenceCard = ({ ob }) => {
 let router = useRouter();
 let itemData = useHookstate(st.itemData);
 let clearenceId = useHookstate(st.clearenceId);

 let setItem = async () => {
  clearenceId.set(ob.id);
  let url = `https://fakestoreapi.com/products/${ob.id}`;
  let data = await (await axios.get(url)).data
  itemData.set(data);
  router.push(`/Detail/`);
 };

 return (
  <TouchableOpacity
   style={css.container(clearenceId.get(), ob)}
   onPress={setItem}>
   <TouchableOpacity style={css.logoContainer} 
   onPress={setItem}>
    <Image
     source={{ uri: ob.image }}
     resizeMode='contain'
     style={css.logImage}
    />
   </TouchableOpacity>

   <View style={css.textContainer}>
    <Text style={css.jobName(clearenceId.get(), ob)} numberOfLines={1}>
     {ob.title}
    </Text>

    <Text style={css.jobType}>{`$${ob.price}`}</Text>
   </View>
  </TouchableOpacity>
 );
};

export default ClearenceCard;
