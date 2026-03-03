// console.log('Hello world');
// const numbers = [23,65,98,48,56,87];
// const result1 = numbers.filter(number => number % 2 === 0);
// console.log(result1);
// const users = [
//   {name: "Rahim", age: 17},
//   {name: "Karim", age: 22},
//   {name: "Sakib", age: 15},
//   {name: "Tamim", age: 30}
// ];
// const result2 = users.forEach( user => { 
//    if(user.age > 20){
//  console.log(user.age);
//    }
// })
// console.log(result2);
// const students = [
//   {name: "Shifat", marks: 85},
//   {name: "Sayma", marks: 92},
//   {name: "Sabbir", marks: 70},
//   {name: "Kakib", marks: 60}
// ];
// const result3 = students.filter( student => {
//     const lower = student.name[0].toLowerCase();
//    if(lower === 's') {
//     console.log(student);
//    }
// })
// console.log(result3);
// const marks = [1, 2, 3, 4, 2, 5, 3, 6, 1];
// let final1 = [];
// const result4 = marks.filter( mark => {
//     if(!final1.includes(mark)){
//     final1.push(mark);
//     }

// console.log(final1);
// const employees = [
//   {name: "Rahim", salary: 550000, department: "IT"},
//   {name: "Karim", salary: 350000, department: "HR"},
//   {name: "Sakib", salary: 60000, department: "IT"},
//   {name: "Tamim", salary: 25000, department: "Marketing"}
// ];
// const result5 = employees.filter(employee => {
//     if(employee.department === "IT" && employee.salary > 55000){
//         console.log(employee
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
// const students = [
//   {name: "Shifat", marks: 90},
//   {name: "Sayma", marks: 75},
//   {name: "Sabbir", marks: 86}
// ];
// let finalarray = [];
// const result = students.map( student => {
//    if(student.marks > 80){ finalarray.push({ ...student , Grade:'A'})}
//    if(student.marks > 70 && student.marks < 80){ finalarray.push({ ...student , Grade:'B'})}
//    if(student.marks > 60  && student.marks < 70){ finalarray.push({ ...student , Grade:'C'})}
//    finalarray.map( arr => delete arr.marks );
// })
// console.log(finalarray);
// const numbers = [1, 3, 7, 10, 14, 18];
// const result = numbers.find( number => number % 2 === 0);
// console.log(result);
// const users = [
//   {id: 2, name: "Rahim"},
//   {id: 2, name: "Karim"},
//   {id: 2, name: "Sakib"}
// ];
// const result = users.find( user => user.id === 2);
// console.log(result);
// const names = ["Rahim", "Karim", "Sakib", "Sumon"];
// const result = names.find( name => name[0] === "S");
// const numbers = [ 30, 40];
// let total = 0;
//  const result = numbers.forEach( number => {
//  total = number + total;
 
// console.log( total);
// const numbers = [5, 8, 13, 20, 7, 18];
// const result = numbers.forEach( number => console.log(number % 2 === 0));
// const students = ["Rahim", "Karim", "Sakib"];
// const result = students.forEach( (student , index ) => console.log( ` ${index + 1}  ${student}`));
// const results = [
//   {name: "A", marks: 40},
//   {name: "B", marks: 30},
//   {name: "C", marks: 25},
//   {name: "D", marks: 80}
// ];
//   let Fail = 0;
// const result = results.forEach( result =>
//   if(result.marks < 33 ){
//  Fail++;
 
// });
//  console.log(Fail);
// const prices = [100, 200, 300];
// let finalarr = [];
// const result = prices.forEach( ( price ) => {
//   let tax = 10;
//  let Tax = price * tax / 100;
//  let newprice = price + Tax;
//  finalarr.push(newprice);

// })
// console.log(finalarr);
// const messages = ["Hello", "Welcome", "Good Bye"];
// const result = messages.forEach( message => {
//   console.log( ` ${'Message :'} ${message}`);
// })