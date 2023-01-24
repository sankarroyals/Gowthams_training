let name = "sankar"
console.log(name)
console.log(typeof name)


// object related
console.log(typeof {})
console.log(typeof []);
console.log(typeof null)
console.log(typeof /l/);
console.log(typeof Error())

// undefined 
let a;
console.log(typeof a)


//      STRING
name ="goutham"

// type conversion to strings using String()
console.log(String(32))
console.log(String(true));

// type conversion to strings using .toString()

console.log((32).toString())
console.log((true).toString());


// take two numbers as integers and concatinate that two number
let n1=12
let n2 =12
console.log(n1+n2)          // 12
console.log(String(n1)+String(n2)) // 1212



                                        // object to String

let data = [{"name":"sankar","age":20}]
console.log(data)

// object to string
const stringdata = JSON.stringify(data)
console.log(stringdata);

// string to object
console.log(JSON.parse(stringdata))



                                    // template literal 
var greeting = "hloo"
var loginedUser = "mukesh"

console.log(greeting + " mukesh");           //normal adding string

console.log(`${greeting} ${loginedUser}`)         //template  literal





                                    // split() , splice() ...

name = "Gowtham"
console.log(name.split())            // ['Gowtham']
console.log(name.split(""));          // ['G', 'o', 'w', 't', 'h', 'a', 'm']
console.log(name.split("").join('-'))  // G-o-w-t-h-a-m

console.log(name.slice(2,3));         // w


console.log(name.length);               // 7


for(let i=0;i<name.length;i++){
    
    console.log(name[i]);
}




a= "1"
var b= 1

console.log(a==b);  // true
console.log(a===b);  // false because it is strict comparision






















