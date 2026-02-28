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
console.log(student.name.sala);
const user = {
  name: "Shifat",
  address: {
    city: "Dhaka"
  }
};


console.log(user.address.phone); 