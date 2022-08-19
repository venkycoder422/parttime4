// difference between let and const ;


// let num = 5;
// num = 7;
// console.log(num);

// const num2 = 10;

// num2 = 9 ;

// console.log(num2);


// Hoisting 

// How Hoisting Works?
// console.log(number)
// var number = 5
// // Above line JS engines takes as 
// var numbers = undefined
// console.log(number) // Till this point number is by default(Due to hoisting) has undefined value.
// number = 5


// clousers 

// function a(){
//     var b=9;

//     function c(){
//         b= 8;
//         console.log(b)
//     }
//     c();
// console.log(b);
// }

// a();


function intervel(){
    console.log("intervel so coming going");
}

setInterval(intervel,1000)


function setting(){
    console.log("time completed");
    clearInterval(intervel);
}

setTimeout(setting,4000);