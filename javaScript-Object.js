//javaScript Object Notation-JSON
const user = {id:11, name: 'galib', job: 'actor'};
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);

const shop={
    name: 'Alia Store',
    address:'Ronbir road',
    profit:15000,
    products:['laptop','mobile','pepsi'],
    //object ar vitor object
    owner:{
        name:'Alia Bhatt',
        profession: 'Actor'
    },
    isExpensive: false,
};
const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);
//console.log(shopStringified.owner);--undefined
const converted = JSON.parse(stringified);
console.log(converted);
console.log(converted.owner);