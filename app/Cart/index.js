import React from 'react';
import { st } from '../../state/state';
import { Detail } from '../../Comps/Detail/index';

export default function Cart() {
 return <Detail stateList_={st.cartList} stateItem_={st.cartItem} txt={'Cart'} />
};