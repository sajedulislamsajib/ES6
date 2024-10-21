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
var myFun=function(...x){
    return x
}
console.log(myFun(1,2,3,4,5,6,7,8,9,10));