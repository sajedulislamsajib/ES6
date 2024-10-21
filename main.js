// var billGates={
//     shirt:true,
//     shirtColor:"offwhite",
//     smile:true,
//     sweter:true,
//     swetercolor:"gray",
//     chosma:true

// }
// console.log(billGates['shirtColor']);
// var billGatesPro={
//     shirt:{
//         color:"offWhite",
//         Quality:"good",
//         price:"200USD"
//     },
//     sweter:{
//         color:"Gray",
//         Quality:"good",
//         price:"230USD",
//         warmth:"best"

//     }
// }

// console.log(billGatesPro['sweter']['price']);
//------------------

// var billGates={
//     shirt:true,
//     shirtColor:"offwhite",
//     smile:true,
//     sweter:true,
//     swetercolor:"gray",
//     chosma:true

// }
// if(billGates['shirtColor']=="red"){
//     console.log("Shirt Color is Red");
// }
// if(billGates['shirtColor']=="blue"){
//     console.log("Shirt Color is Blue");
// }
// if(billGates['shirtColor']=="offWhite"){
//     console.log("Shirt Color is offWhite");
// }

// function myName(x,y){

//     var z=x+y;
//     console.log(z);

// }
// myName("sajedul","sajib")

// function something(...x){
//     var sum =0;
//     for(let y in x){
//         sum=sum+y;
//     }
// console.log(sum);


// }
// something(1,2,3,4,5,6,7,8,9,10)
// var myFun=function(...x){
//     return x
// }
// console.log(myFun(1,2,3,4,5,6,7,8,9,10));
//------------------------
//arraow function
// var myArraow=(...x)=>{
//     console.log(x);
// }
// myArraow(1,2,3,4);
//--------------------------------
//ES6 array
//array declaration
// var myArray=[1,2,3,4,5,6,7,8,9]
// var myArraowPro = new Array(1,2,3,4,5,6,7,8,9);


// console.log(myArray[1])
// console.log(myArraowPro[1])

// for(let item in myArraowPro)
// {
//     console.log(item);
// }
//multidimentional array
// var Bangladesh=["Dhaka","Rangpur","Ctg"]
// var india=["Mumbai","Chennai","Kolkata"]
// var china=["Uhan","Shanghai","Hongkong"]

// var asia=[Bangladesh,india,china]
// console.log(asia[1][2])
//----------------------Array Destucturing--------------------
// var countries=["BAN","IND","CANA","PAK"]
// var[a,,,b]=countries;
// console.log(b);
//----------------------MAP--------------(key,vaue)
var myMap =new Map();
myMap.set("key1","Bangladesh")
myMap.set("key2","India")
myMap.set("key3","Srilanka")
myMap.set("key4","Maldiv")
myMap.set("key5","Bhutan")
myMap.set("key6","Nepal")
myMap.set("key7","Thailand")


console.log(myMap.values())
console.log(myMap.keys())