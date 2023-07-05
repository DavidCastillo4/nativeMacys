import React, { useEffect } from 'react';
import { ActivityIndicator, Text, Image, ImageBackground, TouchableOpacity, View, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import theme from '../../contants/theme/theme';
import img from '../../contants/images/img';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';
import css from './CSS/css';
import tab from './CSS/tab';
import HeartCart from '../../Comps/HeartCart/HeartCart';

export default function Heart() {
 let router = useRouter();
 let heartItem = useHookstate(st.heartItem);
 let tabName = useHookstate(st.tabName);
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);
 let tabs = ['description', 'category', 'title'];
 let heartList = useHookstate(st.heartList);


 let handlePagination = (direction) => {
  if (heartList.get() && heartList.get().length > 0) {
   let ix = heartList.get().findIndex(item => item.id === heartItem.id.get());
   console.log('ix=', ix)

   if (direction === 'right') {
    let o = heartList[ix + 1];

    if (typeof o.id != 'undefined') {
     let item = JSON.parse(JSON.stringify(o.get()));
     heartItem.set(item);
    } else {
     let o = JSON.parse(JSON.stringify(heartList[0].get()));
     heartItem.set(o);
    };

   };

   if (direction === 'left') {
    let o = heartList[ix - 1];
    
    if (typeof o.id != 'undefined') {
     let item = JSON.parse(JSON.stringify(o.get()));
     heartItem.set(item) 
    } 
    else { 
     let o = JSON.parse(JSON.stringify(heartList[heartList.get().length - 1].get()));
     heartItem.set(o);     
    };
   }
  }
 };


 useEffect(() => {
  if (!heartItem.get()) {
   router.push('/')
  };

 }, [heartItem.get()]);

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
      <View style={theme.ico.btnContainer2}>

       <TouchableOpacity>
        <ImageBackground
         source={img.heartOutline}
         resizeMode='contain'
         style={theme.ico.heart(35)}>
         <Text style={{ fontWeight: 600, fontSize: 19, paddingLeft: 13, paddingTop: 6 }}>
          {heart.get().length}
         </Text>
        </ImageBackground>

       </TouchableOpacity>

       <TouchableOpacity onPress={() => router.push(`/Cart/`)}>
        <ImageBackground
         source={img.cart}
         resizeMode='cover'
         style={theme.ico.cart(40)}>
         <Text style={{ fontWeight: 600, fontSize: 19, paddingLeft: 18 }}>
          {cart.get().length}
         </Text>
        </ImageBackground>
       </TouchableOpacity>

      </View>
     ),
     headerTitle: "Heart",
    }}
   />

   <ScrollView showsVerticalScrollIndicator={false}>

    {heartItem.get() ?

     <View style={css.container}>

      <View style={css.logoBox}>
       <Image
        source={{ uri: heartItem.image.get() }}
        style={css.logoImage} />
      </View>

      <View style={css.jobTitleBox}>
       <Text style={css.jobTitle}>${heartItem.price.get()}</Text>
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


       <Text style={tab.headText}>{heartItem[tabName.get()].get()}</Text>


      </View>

      <HeartCart ob={heartItem} />

     </View>

     : <ActivityIndicator size='large' color={theme.COLORS.primary} />
    }

   </ScrollView>


   <View style={theme.paginate.footerContainer}>
    <TouchableOpacity
     style={theme.paginate.paginationButton}
     onPress={() => handlePagination('left')}
    >
     <Image
      source={img.chevronLeft}
      style={theme.paginate.paginationImage}
      resizeMode="contain"
     />
    </TouchableOpacity>

    <View style={theme.paginate.paginationTextBox}>
     <Text style={theme.paginate.paginationText}>
      {heartList.get().findIndex(item => item.id === heartItem.id.get())+ 1}
     </Text>
    </View>
    <TouchableOpacity
     style={theme.paginate.paginationButton}
     onPress={() => handlePagination('right')}
    >
     <Image
      source={img.chevronRight}
      style={theme.paginate.paginationImage}
      resizeMode="contain"
     />
    </TouchableOpacity>

   </View>

  </SafeAreaView>
 );

}