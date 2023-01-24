console.log("First print")

// var , let , const

console.warn('Error warning')
console.error("error")

console.log(
    {
        "name":"sankar",
        "age":20
    }
)



// var Global scope
// let, const block scope

var demo = "first demo"
var demo ="second demo"
{
    console.log(demo)
}



var number1 = 5; // integer

number1 =10
console.log(number1);

var doubleinteger = 989565553546265629.22
var myboolean = true

var mynotanumber = NaN
console.log(isNaN("sankar"))   

var mynull = null


// Hoisting
console.log(myundefined)
var myundefined = undefined


// find type of the variable using typeof
console.log(typeof doubleinteger);






// let
let demo1 = "bye"
demo1 = "hloo"
{
   let demo1 = "bye"              // bye
}
console.log(demo1)                // hloo 



// const
const demo3 = "const demo"  
// demo3 = "bye const "           redeclare is not possbile
{
    const demo3 = "bye const"      // bye const
}
console.log(demo3);


// using existing array
const array = [10,20,30]
// array = [10,20,30,40]               not possible to re declare
array.push(50)
console.log(array)






