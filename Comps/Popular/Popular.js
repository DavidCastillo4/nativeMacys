import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, FlatList } from "react-native";
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';
import theme from '../../contants/theme/theme';
import css from './css';
import img from '../../contants/images/img';
import { useRouter } from "expo-router";
import { st } from '../../state/state';
import axios from 'axios';
import PopularCard from './Card/PopularCard';

export let Popular = () => {
 let popularList = useHookstate(st.popularList); 

 let setPopularData = async () => {
  let url = 'https://fakestoreapi.com/products?limit=10';
  let data = await (await axios.get(url)).data  
  popularList.set(data);
 }; 

 useEffect(() => { setPopularData(); }, []);

 return (
  <View style={css.container}>
   <View style={css.header}>
    <Text style={css.headerTitle}>Popular Items</Text>
   </View>

   <View style={css.cardsContainer}>
    {popularList.get() ?
     <FlatList
      data={popularList.get()}
      renderItem={({ item }) => (
       <PopularCard ob={item} />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ columnGap: theme.SIZES.medium }}
      horizontal
     />
     : <ActivityIndicator size='large' color={theme.COLORS.primary} />
    }
   </View>
  </View>
 );
};