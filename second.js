// function test1(){
//     const p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("first promise resolve");
//         },3000)
//     })
//     return p1;
// }

// function test2(){
//     const p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("second promise resolve");
//         },4000)
//     })
//       return p2;    
// }


// async function greet() {
//   //  console.log("Hello I greet you");

//     const [data1,data2] = await Promise.all([test1(),test2()]);          // multiple code ko parallaly ek sath execute
//     console.log(data1);
//     console.log(data2);
// }
// greet();
 




// async function greet() {

//     console.log("Hello I greet you");
//     const data1 = await test1();
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }
// greet();

// console.log("Hello coder army");
// console.log("kaise ho app sab log");
// console.log("sab thik"); 