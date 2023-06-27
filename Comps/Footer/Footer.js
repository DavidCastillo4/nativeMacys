import { View, Text, TouchableOpacity, Image } from "react-native";
import css from "./css";
import img from '../../contants/images/img';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';

let Footer = () => {
 let itemData = useHookstate(st.itemData);
 let cart = useHookstate(st.cart);

 let modifyCart = () => {
  cart.set((curr) => {
   let n = itemData.id.get();
   let ix = curr.findIndex(i => i === n);
   return ix === -1 ?
    [...curr, n]
    : curr.filter(i => i !== n);
  });
 };

 return (
  <View style={css.container}>
   <TouchableOpacity style={css.likeBtn}>
    <Image
     source={img.heartOutline}
     resizeMode='contain'
     style={css.likeBtnImage}
    />
   </TouchableOpacity>

   <TouchableOpacity
    style={css.applyBtn}
    onPress={modifyCart}
   >
    <Text style={css.applyBtnText}>
     {cart.get().findIndex(i => i === itemData.id.get()) === -1
      ? 'Add to Cart'
      : 'Remove from Cart'}
    </Text>
   </TouchableOpacity>
  </View>
 );
};

export default Footer;
