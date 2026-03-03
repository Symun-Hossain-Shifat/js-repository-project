console.log('Hello world');
// const numbers = [23,65,98,48,56,87];
// const result = numbers.filter(number => number % 2 === 0);
// console.log(result);
// const users = [
//   {name: "Rahim", age: 17},
//   {name: "Karim", age: 22},
//   {name: "Sakib", age: 15},
//   {name: "Tamim", age: 30}
// ];
// const result = users.forEach( user => {
    
//    if(user.age > 20){
//  console.log(user.age);
//    }
// })
// console.log(result);
// const students = [
//   {name: "Shifat", marks: 85},
//   {name: "Sayma", marks: 92},
//   {name: "Sabbir", marks: 70},
//   {name: "Kakib", marks: 60}
// ];
// const result = students.filter( student => {
//     const lower = student.name[0].toLowerCase();
//    if(lower === 's') {
//     console.log(student);
//    }
   
// })
// console.log(result);
// const marks = [1, 2, 3, 4, 2, 5, 3, 6, 1];
// let final = [];
// const result = marks.filter( mark => {
//     if(!final.includes(mark)){
//     final.push(mark);
//     }
// })

// console.log(final);
// const employees = [
//   {name: "Rahim", salary: 550000, department: "IT"},
//   {name: "Karim", salary: 350000, department: "HR"},
//   {name: "Sakib", salary: 60000, department: "IT"},
//   {name: "Tamim", salary: 25000, department: "Marketing"}
// ];
// const result = employees.filter(employee => {
//     if(employee.department === "IT" && employee.salary > 55000){
//         console.log(employee);

//     }
//     return;
// })
// console.log(result);
// const numbers = [2, 3, 4, 5, 6];
// const result = numbers.map( number => number * 2 );
// console.log(result);
// const names = ["Rahim", "Karim", "Sakib"];
// const result = names.map( name => 'MR. ' + name );
// console.log(result)
// const users = [
//   {name: "Rahim", email: "rahim@gmail.com"},
//   {name: "Karim", email: "karim@gmail.com"},
//   {name: "Sakib", email: "sakib@gmail.com"}
// ];
// let newarr = [];
// const result = users.map( user => {
//  newarr.push(user.email);
// })
// console.log(newarr);
// const cities = ["dhaka", "chittagong", "khulna"];
// const result = cities.map( city => city.toUpperCase());
// console.log(result);
// const products = [
//   {name: "Laptop", price: 1000},
//   {name: "Mouse", price: 50}
// ];
// const result = products.map( product => {return { ...product , inStock: true}});
// console.log(result);
const students = [
  {name: "Shifat", marks: 90},
  {name: "Sayma", marks: 75},
  {name: "Sabbir", marks: 86}
];
let finalarray = [];
const result = students.map( student => {
   if(student.marks > 80){ finalarray.push({ ...student , Grade:'A'})}
   if(student.marks > 70 && student.marks < 80){ finalarray.push({ ...student , Grade:'B'})}
   if(student.marks > 60  && student.marks < 70){ finalarray.push({ ...student , Grade:'C'})}
   finalarray.map( arr => delete arr.marks );
})
console.log(finalarray);