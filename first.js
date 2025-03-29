 const cart = ["Pizza", "cake", "sandwich"];


function placeorder(cart){
    console.log("Talking with Domino's");
    
    const pr = new Promise(function(resolve,reject){
    
        setTimeout(()=>{  
            const food_available = true;
             if(food_available){
                console.log("Order placed successfully");
                const order = {orderId: 22231, food: cart , resturant: "Dominos", location:"Rewa"}
                resolve(order);
            }
           else{
            reject("Items out of stocks");
           }
        },2000)
    })
 }


function preparingOrder(order, callback){
    console.log("pizza preparation started...");

    setTimeout(()=>{
        console.log("pizza preparation done");
        const foodDetails = {token: 12, resturant: order.resturant, location: order.location};
        callback(foodDetails);
    }, 2000)
}


function pickuporder(foodDetails){
    console.log("Reaching resturant for picking order");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("pickup the order by delivery boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
        },3000)
    })
    return pr;
}


function deliverorder(droplocation ,callback){
    console.log("Dedlivery boy on the way");

    setTimeout(()=>{
        console.log("Order deliver successfully");
        callback();
    },3000)
}



async function greet() {
  try{                                  // koi bhi error aa raha hai use try block
    const order = await placeorder(cart);
    const foodDetails = await preparingOrder(order);
    const droplocation = await pickuporder(foodDetails);
    deliverorder(droplocation);    
  }
  catch(error){
    console.log(error);
  }
}
 greet();


// placeorder(cart)
//  .then(order=>preparingOrder(order))
//  .then(foodDetails=>pickuporder(foodDetails))
//  .then(droplocation=>deliverorder(droplocation))
//  .catch(error=>console.log(error));  




// // ***************


// function test1(){
//     const p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         resolve("first promise resolve");
//         },3000)
//     })
//     return p1;
// }

// function test2(){
//     const p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("second promise resolve");
//         },3000)
//     })
//     return p2;    
// }


// async function greet() {
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }
// greet();

// // setTimeout(()=>{  
//     async function meet() {
//     return "Hello Coder";
// }
// meet().then(value=>console.log(value));
//  //  },4000)




// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("first promise resolve");
//     },3000)
    
// })

// const p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("second promise resolve");
//     },2000)
    
// })


// p1.then(value=>console.log(value));
// // jiska kam time hoga pahle ho print hoga
// p2.then(value=>console.log(value));


// console.log(p1);          // direct iska use nhi karenge
// p1.then((response)=>console.log(response));

// async function greet() {
//     const data = await p1;
//     console.log(data);
// }
// greet();



// async function greet() {
//     const data1 = await p1;
//   //  console.log("hello coder army");
//     console.log(data1);
//   // dono data ek sath milenge
//     const data2 = await p2;
//     console.log(data2);
// }
// greet();