import { hookstate } from '@hookstate/core';

export let st = {
 srchList: hookstate(),
 srchStr: hookstate(),
 clearenceList: hookstate(),
 popularList: hookstate(),
 popularId: hookstate(),
 itemData: hookstate(),
 tabName: hookstate('description')
}