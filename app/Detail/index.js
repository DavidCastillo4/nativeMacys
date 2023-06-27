import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native'
import { Stack, useRouter } from 'expo-router'
import axios from 'axios';
import theme from '../../contants/theme/theme';
import img from '../../contants/images/img';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';
import css from './css';
import tab from './tab';

export default function Detail() {
 let router = useRouter();
 let itemData = useHookstate(st.itemData);
 let tabName = useHookstate(st.tabName);
 let tabs = ['description', 'category', 'title']

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: theme.COLORS.lightWhite },
     headerShadowVisible: false,
     headerBackVisible: false,
     headerTitleStyle: { fontWeight: "bold" },
     headerTitleAlign: 'center',
     headerLeft: () => (
      <TouchableOpacity style={theme.ico.btnContainer} onPress={() => router.back()} >
       <Image
        source={img.left}
        resizeMode='cover'
        style={theme.ico.img('60%')}
       />
      </TouchableOpacity>
     ),
     headerRight: () => (
      <TouchableOpacity style={theme.ico.btnContainer}  >
       <Image
        source={img.share}
        resizeMode='cover'
        style={theme.ico.img('100%')}
       />
      </TouchableOpacity>
     ),
     headerTitle: "Detail",
    }}
   />

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

  </SafeAreaView>
 );

}