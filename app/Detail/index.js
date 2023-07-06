import React from 'react';
import { ActivityIndicator, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Stack } from 'expo-router';
import theme from '../../contants/theme/theme';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';
import css from './CSS/css';
import tab from './CSS/tab';
import HeartCart from '../../Comps/HeartCart/HeartCart';
import { screenOptions } from '../../Comps/StackScreen/StackScreen';

export default function Detail() {
 let itemData = useHookstate(st.itemData);
 let tabName = useHookstate(st.tabName);
 let tabs = ['description', 'category', 'title'];

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen options={screenOptions('Detail')} />

   <ScrollView showsVerticalScrollIndicator={false}>

    {itemData.get() ?

     <View style={css.container}>

      <View style={css.logoBox}>
       <Image
        source={{ uri: itemData.image.get() }}
        style={css.logoImage} />
      </View>

      <View style={css.jobTitleBox}>
       <Text style={css.jobTitle}>${itemData.price.get()}</Text>
      </View>

      <View style={tab.container}>
       <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
         <TouchableOpacity
          style={tab.btn(item, tabName.get())}
          onPress={() => tabName.set(item)}>
          <Text style={tab.btnText(item, tabName.get())}>{item}</Text>
         </TouchableOpacity>
        )}
        contentContainerStyle={{ columnGap: theme.SIZES.small / 2 }}
        keyExtractor={(item) => item}
       />
      </View>

      <View style={tab.containerBox}>
       <Text style={tab.headText}>{itemData[tabName.get()].get()}</Text>
      </View>

     </View>

     : <ActivityIndicator size='large' color={theme.COLORS.primary} />
    }

   </ScrollView>

   <HeartCart ob={itemData} />
  </SafeAreaView>
 );

}