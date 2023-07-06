import { Text, Image, ImageBackground, TouchableOpacity, View } from 'react-native';
import { useHookstate } from '@hookstate/core';
import { useRouter } from 'expo-router';
import theme from '../../contants/theme/theme';
import img from '../../contants/images/img';
import { st } from '../../state/state';

export let  screenOptions = (txt) => {
 let router = useRouter(); 
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);

 return  {
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
   <View style={theme.ico.btnContainer2}  >

    <TouchableOpacity onPress={() => router.push(`/Heart/`)}>
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
  headerTitle: txt,
 }

}