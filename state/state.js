import { hookstate } from '@hookstate/core';

export let st = {
 srchList: hookstate(),
 srchStr: hookstate(),
 storeList: hookstate(),
 storeId: hookstate(),
 storeListCount: hookstate(20),
 popularList: hookstate(),
 popularId: hookstate(),
 itemData: hookstate(),
 tabName: hookstate('description'),
 cart: hookstate([]),
 heart: hookstate([]),
 cartList: hookstate(),
 heartList: hookstate()
};