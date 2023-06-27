import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';
import css from './css';
import img from '../../contants/images/img';
import { useRouter } from "expo-router";
import { st } from '../../state/state';

export let Srch = () => {
 let router = useRouter();
 let srchStr = useHookstate(st.srchStr);

 let fn = () => {
  // let a = ['david']
  // console.log(srch.set(a))
 }

 useEffect(() => {

 });

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

    <TouchableOpacity style={css.searchBtn} onPress={() => { router.push(`/Search/`) }}>
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