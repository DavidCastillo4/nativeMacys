import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { useHookstate } from '@hookstate/core';
import { Clearence } from '../Comps/Clearence/Clearence';
import { Popular } from '../Comps/Popular/Popular';
import { Srch } from '../Comps/Srch/Srch';
import img from '../contants/images/img';
import theme from '../contants/theme/theme';

export default function Home() {

 return (
  <SafeAreaView style={{ flex: 1, backgroundColor: theme.COLORS.lightWhite }}>
   <Stack.Screen
    options={{
     headerStyle: { backgroundColor: theme.COLORS.lightWhite },
     headerShadowVisible: false,
     headerLeft: () => (
      <TouchableOpacity style={theme.ico.btnContainer}  >
       <Image
        source={img.menu}
        resizeMode='cover'
        style={theme.ico.img('60%')}
       />
      </TouchableOpacity>
     ),
     headerRight: () => (
      <TouchableOpacity style={theme.ico.btnContainer}  >
       <Image
        source={img.profile}
        resizeMode='cover'
        style={theme.ico.img('100%')}
       />
      </TouchableOpacity>
     ),
     headerTitle: "Macy's",
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