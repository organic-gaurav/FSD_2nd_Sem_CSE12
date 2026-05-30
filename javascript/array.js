let person={
    name: "gaurav",
    age:18,
    city:"haldwani"

};
console.log(person.city);
let numbers =[1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers);




let sum= [1,2,3,4,5];
let total=
sum.reduce((accumulator,currentValue)=>accumulator+currentValue,2);
crossOriginIsolated.log(total);