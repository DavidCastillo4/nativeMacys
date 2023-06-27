import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, ImageBackground } from "react-native";
import { Stack } from 'expo-router';
import { useHookstate } from '@hookstate/core';
import { Clearence } from '../Comps/Clearence/Clearence';
import { Popular } from '../Comps/Popular/Popular';
import { Srch } from '../Comps/Srch/Srch';
import img from '../contants/images/img';
import theme from '../contants/theme/theme';
import { st } from '../state/state';

export default function Home() {
 let cart = useHookstate(st.cart);

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: theme.COLORS.lightWhite },
     headerShadowVisible: false,
     headerLeft: () => (
      <TouchableOpacity style={theme.ico.btnContainer}  >
       <Image
        source={img.amazon}
        resizeMode='cover'
        style={theme.ico.img('60%')}
       />
      </TouchableOpacity>
     ),
     headerRight: () => (
      <TouchableOpacity style={theme.ico.btnContainer}  >
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
     <Clearence />
    </View>
   </ScrollView>

  </SafeAreaView>
 );
};