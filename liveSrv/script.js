let data = [
 { id: 1, category: "mens", description: " fitted pants" }
 , { id: 2, category: "boys", description: "fitted shirt" }
 , { id: 3, category: "women", description: "black shoes boys" }
 , { id: 4, category: "girls", description: "black socks" }
];

let srchStr = 'boys';

let filteredArray = data.filter(item => 
 item.description.includes(srchStr)
 ||  item.category.includes(srchStr)
 );


 console.log(filteredArray)



// above is my code.  I only want returned those objects where the description contains the word 'black'.
// So in the endAsyncEvent, the filterdArray will be equal to the below
// [
//  { id: 3, category: "women", description: "black shoes" }
// , { id: 4, category: "girls", description: "black socks" }
// ]




