import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import css from './css';
import img from '../../contants/images/img';
import { useRouter } from "expo-router";
import { st } from '../../state/state';
import axios from 'axios';

export let Srch = () => {
 let router = useRouter();
 let srchStr = useHookstate(st.srchStr);
 let srchList = useHookstate(st.srchList);

 let setSrchData = async () => {
  if (srchStr.get()) {
   let url = 'https://fakestoreapi.com/products';
   let data = await (await axios.get(url)).data;

   let result = data.filter(item =>
    item.description.includes(srchStr.get()) ||
    item.title.includes(srchStr.get()) ||
    item.category.includes(srchStr.get())
   );
   srchList.set(result);
   router.push(`/Search/`);
  }
 };

 return (
  <View>
   <View style={css.container}>
    <Text style={css.welcomeMessage}>Search our store!</Text>
   </View>

   <View style={css.searchContainer}>
    <View style={css.searchWrapper}>
     <TextInput
      style={css.searchInput}
      value={srchStr.get()}
      onChangeText={(text) => srchStr.set(text)}
      placeholder='What are you looking for?'
     />
    </View>

    <TouchableOpacity style={css.searchBtn} onPress={setSrchData}>
     <Image
      source={img.search}
      resizeMode='contain'
      style={css.searchBtnImage}
     />
    </TouchableOpacity>
   </View>


  </View>
 )
};