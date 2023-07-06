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
import { screenOptions } from '../../Comps/StackScreen/StackScreen';

export let Detail = ({ stateList_, stateItem_, txt }) => {
 let stateList = useHookstate(stateList_);
 let stateItem = useHookstate(stateItem_);

 let router = useRouter();
 let tabName = useHookstate(st.tabName);
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);
 let tabs = ['description', 'category', 'title'];

 let handlePagination = (direction) => {
  if (stateList.get() && stateList.get().length > 0) {
   let ix = stateList.get().findIndex(item => item.id === stateItem.id.get());

   if (direction === 'right') {
    let o = stateList[ix + 1];

    if (typeof o.id != 'undefined') {
     let item = JSON.parse(JSON.stringify(o.get()));
     stateItem.set(item);
    } else {
     let o = JSON.parse(JSON.stringify(stateList[0].get()));
     stateItem.set(o);
    };

   };

   if (direction === 'left') {
    let o = stateList[ix - 1];

    if (typeof o.id != 'undefined') {
     let item = JSON.parse(JSON.stringify(o.get()));
     stateItem.set(item)
    }
    else {
     let o = JSON.parse(JSON.stringify(stateList[stateList.get().length - 1].get()));
     stateItem.set(o);
    };
   }
  }
 };


 useEffect(() => {
  if (!stateItem.get()) {
   router.push('/')
  };

 }, [stateItem.get()]);

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen options={screenOptions(txt)} />

   <ScrollView showsVerticalScrollIndicator={false}>

    {stateItem.get() ?

     <View style={css.container}>

      <View style={css.logoBox}>
       <Image
        source={{ uri: stateItem.image.get() }}
        style={css.logoImage} />
      </View>

      <View style={css.jobTitleBox}>
       <Text style={css.jobTitle}>${stateItem.price.get()}</Text>
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
       <Text style={tab.headText}>{stateItem[tabName.get()].get()}</Text>
      </View>

      <HeartCart ob={stateItem} />

     </View>

     : <ActivityIndicator size='large' color={theme.COLORS.primary} />
    }

   </ScrollView>

   {stateItem.get() ?
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
       {stateList.get().findIndex(item => item.id === stateItem.id.get()) + 1}
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
    : null
   }



  </SafeAreaView>
 );

}