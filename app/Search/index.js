import React from 'react';
import {  Text, Image, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import theme from '../../contants/theme/theme';
import img from '../../contants/images/img';
import css from './css';

export default function Search() {
 let router = useRouter();

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: theme.COLORS.lightWhite },
     headerShadowVisible: false,
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
     headerTitle: "Search Results",
    }}
   />

   <ScrollView showsVerticalScrollIndicator={false}>

   <View style={css.container}>
      <Text style={css.title}>hello</Text>

      {/* <View style={css.pointsContainer}>
        {srch.get().map((item, index) => 
        (
          <View style={css.pointWrapper} key={item + index}>
            <View style={css.pointDot} />
            <Text style={css.pointText}>{item}</Text>
          </View>
        )
        )}
      </View> */}

    </View>


   </ScrollView>



  </SafeAreaView>
 )
};