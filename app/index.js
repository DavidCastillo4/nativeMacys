import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground, Linking } from "react-native";
import { Stack } from 'expo-router';
import { useHookstate } from '@hookstate/core';
import { Store } from '../Comps/Store/Store';
import { Popular } from '../Comps/Popular/Popular';
import { Srch } from '../Comps/Srch/Srch';
import img from '../contants/images/img';
import theme from '../contants/theme/theme';
import { st } from '../state/state';

export default function Home() {
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);
 let url = 'https://www.amazon.com/ref=nav_logo';

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: theme.COLORS.lightWhite },
     headerShadowVisible: false,
     headerLeft: () => (
      <TouchableOpacity style={theme.ico.btnContainer} onPress={() => Linking.openURL(url)}  >
       <Image
        source={img.amazon}
        resizeMode='cover'
        style={theme.ico.img('60%')}
       />
      </TouchableOpacity>
     ),
     headerRight: () => (
      <TouchableOpacity style={theme.ico.btnContainer2}  >

       <ImageBackground
        source={img.heartOutline}
        resizeMode='contain'
        style={theme.ico.img2('100%')}>
        <Text style={{ marginLeft: 15, fontWeight: 600, fontSize: 19, marginTop: 9 }}>
         {heart.get().length}
        </Text>
       </ImageBackground>


       <ImageBackground
        source={img.cart}
        resizeMode='cover'
        style={theme.ico.img('100%')}>
        <Text style={{ marginLeft: 17, fontWeight: 600, fontSize: 19, marginTop: -2 }}>
         {cart.get().length}
        </Text>
       </ImageBackground>
      </TouchableOpacity>
     ),
     headerTitle: "Amazon",
     headerTitleStyle: { fontWeight: "bold" },
     headerTitleAlign: 'center'
    }}
   />

   <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1, padding: '1%' }}>
     <Srch />
     <Popular />
     <Store />
    </View>
   </ScrollView>

  </SafeAreaView>
 );
};