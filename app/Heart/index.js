import React from 'react';
import { st } from '../../state/state';
import { Detail } from '../../Comps/Detail/index';

export default function Heart() {
 return <Detail stateList_={st.heartList} stateItem_={st.heartItem} txt={'Heart'} />
};