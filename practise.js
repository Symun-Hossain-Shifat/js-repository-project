// function chek(a,b = 20){
// const result = a+b;
// console.log(result);
// }
// chek(10,2);
// let number = 23;
// const text = `shifat is 
// a good student for our country ${number}`;
// console.log(text);
const firstfunction = function(a,b = 4){
    const total = a + b;
    return total;
}
//  const result = firstfunction(2)
// console.log(result);
const countnumber  = function(a,b = 0){
 return a*b;
}

const addnumber = (x,y) =>{
    const add = x + y;
    return add;
}
const result = addnumber(2,8)
// console.log(result);
const numbers = [23,54,85,36,54,45]
const number =[]
// console.log(Math.max(...numbers));
let shifat = {
    name : 'shifat',
    age : 23,
    color: 'white'
}
const editobject = {
    ...shifat,
    number: 5698
};

Object.seal(editobject);
delete editobject.name;
// console.log(editobject)
const student = {
    age :45,
    color : 'sion',
    name:' fuck',
    about : {
        add : 78,
        fnd:{
            cout : 45
        }
    }
}
let nameproperty ="name";
// console.log(student[nameproperty]);
// console.log(student.name.sala);
// const user = {
//   name: "Shifat",
//   address: {
//     city: "Dhaka"
//   }
// };


// console.log(user.address.phone); 
function checkvariable (){
    let name = 'shifat';
    var color = "green";
    const country = 'india'
    if( 0 === 0){
        console.log(name)
        console.log(color)
        console.log(country)
    }
}
// checkvariable();
const all = [23,65,45,87];
// const maxone = (arr) => {
//     let maxnumber = arr[0] ;
//     for(const number of all){
//  if(number> maxnumber){
//     maxnumber = number;
//  }
//     }
//     return maxnumber;
// }
// console.log(maxone(all));
// console.log(Math.max(...all)) ;
all.push(100);

// console.log(all);
const user = {
ud: 101,
email : 'shifat',
adress: {
    city :'dhaka',
    country:"india"
}
}
let email = user.email;
// console.log(email);
// delete user.adress;
// console.log(Object.values(user))
// console.log(Object.keys(user))
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const finalarr = [...arr1,...arr2];
finalarr.push(7);
finalarr.unshift(0);
// console.log(finalarr);
const us = { name: "Shifat", age: 19 };
const fun = {...us,color:'shik'};
console.log(fun);