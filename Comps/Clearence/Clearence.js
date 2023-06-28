import { View, Text, ActivityIndicator } from "react-native";
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';
import theme from '../../contants/theme/theme';
import css from './css';
import { st } from '../../state/state';
import axios from 'axios';
import ClearenceCard from './Card/ClearenceCard';

export let Clearence = () => {
 let clearenceList = useHookstate(st.clearenceList);

 let setClearenceData = async () => {
  let url = 'https://fakestoreapi.com/products';
  let data = await (await axios.get(url)).data  
  clearenceList.set(data);  
 };

 useEffect(() => { setClearenceData(); }, []);

 return (
  <View style={css.container}>
   <View style={css.header}>
    <Text style={css.headerTitle}>Store Items</Text>
   </View>

   <View style={css.cardsContainer}>
    {clearenceList.get() ?
     clearenceList.get().map((ob) => (
      <ClearenceCard
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