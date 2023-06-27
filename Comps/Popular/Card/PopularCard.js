import { View, Text, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import axios from 'axios';
import css from "./css";
import { useRouter } from "expo-router";
import { st } from '../../../state/state';

let PopularCard = ({ ob }) => {
 let popularId = useHookstate(st.popularId);
 let itemData = useHookstate(st.itemData);
 let router = useRouter();

 let setItem = async () => {
  popularId.set(ob.id);
  let url = `https://fakestoreapi.com/products/${ob.id}`;
  let data = await (await axios.get(url)).data
  itemData.set(data);
  router.push(`/Detail/`);   
 };

 return (
  <TouchableOpacity
   style={css.container(popularId.get(), ob)}
   onPress={setItem}
  >
   <TouchableOpacity style={css.logoContainer(popularId.get(), ob)}>
    <Image
     source={{ uri: ob.image }}
     resizeMode='contain'
     style={css.logoImage}
    />
   </TouchableOpacity>
   <Text style={css.companyName} numberOfLines={1}>
    {ob.category}
   </Text>

   <View style={css.infoContainer}>
    <Text style={css.jobName(popularId.get(), ob)} numberOfLines={1}>
     {ob.title}
    </Text>

    <View style={css.infoWrapper}>
     <Text style={css.location}>${ob.price}</Text>
    </View>

   </View>
  </TouchableOpacity>
 );
};

export default PopularCard;
