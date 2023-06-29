import { View, Text, TouchableOpacity, Image } from "react-native";
import axios from 'axios';
import css from "./css";
import img from '../../contants/images/img';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';

let Footer = () => {
 let itemData = useHookstate(st.itemData);
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);
 let cartList = useHookstate(st.cartList);
 let heartList = useHookstate(st.heartList);

 let setState = (state, list) => {
  state.set((curr) => {
   let n = itemData.id.get();
   let ix = curr.findIndex(i => i === n);
   return ix === -1 ?
    [...curr, n]
    : curr.filter(i => i !== n);
  });
  setStateList(state, list)
 };

 let setStateList = async (state, list) => {
  let url = 'https://fakestoreapi.com/products/';
  let a = state.get();
  let data = await (await axios.get(url)).data;  
  let result = data.filter(item => a.includes(item.id));  
  list.set(result);  
 };

 return (
  <View style={css.container}>
   <TouchableOpacity style={css.likeBtn}
    onPress={() => setState(heart, heartList)}>
    <Image
     source={img.heartOutline}
     resizeMode='contain'
     style={css.likeBtnImage}
    />
   </TouchableOpacity>

   <TouchableOpacity
    style={css.applyBtn}
    onPress={() => setState(cart, cartList)}>

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
