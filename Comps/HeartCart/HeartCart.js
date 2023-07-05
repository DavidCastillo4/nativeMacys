import { View, Text, TouchableOpacity, Image } from "react-native";
import axios from 'axios';
import css from "./css";
import img from '../../contants/images/img';
import { useHookstate } from '@hookstate/core';
import { st } from '../../state/state';

let HeartCart = ({ob}) => {
 let cart = useHookstate(st.cart);
 let heart = useHookstate(st.heart);
 let cartList = useHookstate(st.cartList);
 let heartList = useHookstate(st.heartList);
 let cartItem = useHookstate(st.cartItem);

 let setState = (state, list, stateItem) => {
  state.set((curr) => {
   let n = ob.id.get();
   let ix = curr.findIndex(i => i === n);
   return ix === -1 ?
    [...curr, n]
    : curr.filter(i => i !== n);
  });
  setStateList(state, list, stateItem)
 };

 let setStateList = async (state, list, stateItem) => {
  let url = 'https://fakestoreapi.com/products/';
  let a = state.get();

  let data = await (await axios.get(url)).data;
  let result = data.filter(item => a.includes(item.id));
  list.set(result);
  //console.log(result[0])

  if (a.length > 0) {
  
   stateItem.set(result[0])
    //console.log(a.length,'a.length > 0--cartItem=', stateItem.get())
  } else { 
   stateItem.set(null) 
   //console.log(stateItem.get(),'cartItemNull',a.length)
  }
//console.log(stateItem.get())
 };

 return (
  <View style={css.container}>
   <TouchableOpacity style={css.likeBtn}
    onPress={() => setState(heart, heartList, cartItem)}>
    <Image
     source={img.heartOutline}
     resizeMode='contain'
     style={css.likeBtnImage}
    />
   </TouchableOpacity>

   <TouchableOpacity
    style={css.applyBtn}
    onPress={() => setState(cart, cartList, cartItem)}>

    <Text style={css.applyBtnText}>
     {cart.get().findIndex(i => i === ob.id.get()) === -1
      ? 'Add to Cart'
      : 'Remove from Cart'}
    </Text>
   </TouchableOpacity>
  </View>
 );
};

export default HeartCart;
