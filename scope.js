// Outer();
// function Outer() {
//     function inner() {
//       console.log(x);
//     }
//     inner();
//     var x = 0;

// }  // undefined

// Outer();
// function Outer() {
//     function inner() {
//       console.log(x);
//     }
//     var x = 0;
//     inner();

// }  // 0 gives output

// Outer();
// function Outer() {
//     function inner() {
//       console.log(x);
//     }
//     inner();
//     let x = 0;

// }  // error connnot acces //

// cal()

// let sum = 9;
// function cal() {
//   let sum = 99;
//   console.log(sum);
// }
// console.log(sum);
// cal()

// {
//     var s = 1;
//   var s = 0;
// }
// console.log(s); var allow you decalred but let not allow identier alread decalred
// const also  not allow

{
  var q = 0;
  let w = 3;
}
// block socpe work only for let ad const
