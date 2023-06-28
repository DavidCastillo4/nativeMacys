import { View, Text, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import css from "./css";
import { useRouter } from "expo-router";
import { st } from '../../../state/state';

let StoreCard = ({ ob }) => {
 let router = useRouter();
 let itemData = useHookstate(st.itemData);
 let storeId = useHookstate(st.storeId);

 let setItem = async () => {
  storeId.set(ob.id);
  let url = `https://fakestoreapi.com/products/${ob.id}`;
  let data = await (await axios.get(url)).data
  itemData.set(data);
  router.push(`/Detail/`);
 };

 return (
  <TouchableOpacity
   style={css.container(storeId.get(), ob)}
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
    <Text style={css.jobName(storeId.get(), ob)} numberOfLines={1}>
     {ob.title}
    </Text>

    <Text style={css.jobType}>{`$${ob.price}`}</Text>
   </View>
  </TouchableOpacity>
 );
};

export default StoreCard;
