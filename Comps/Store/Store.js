import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';
import theme from '../../contants/theme/theme';
import css from './css';
import { st } from '../../state/state';
import axios from 'axios';
import StoreCard from './Card/StoreCard';

export let Store = () => {
 let storeList = useHookstate(st.storeList);
 let storeListCount = useHookstate(st.storeListCount);

 let setStoreData = async () => {
  let url = 'https://fakestoreapi.com/products';
  let data = await (await axios.get(url)).data
  storeList.set(data);
  storeListCount.set(20);
 };

 useEffect(() => { setStoreData(); }, []);

 return (
  <View style={css.container}>
   <View style={css.header}>
    <Text style={css.headerTitle}>Store Items</Text>

    <TouchableOpacity onPress={setStoreData}>
     <Text style={css.headerBtn}>
      {storeListCount.get() !== 20 ? 'Show all' : ''}
     </Text>
    </TouchableOpacity>

   </View>

   <View style={css.cardsContainer}>
    {storeList.get() ?
     storeList.get().map((ob) => (
      <StoreCard
       ob={ob}
       key={ob.id}
      />
     ))
     : (<ActivityIndicator size='large' color={theme.COLORS.primary} />)
    }
   </View>

  </View>
 );
};