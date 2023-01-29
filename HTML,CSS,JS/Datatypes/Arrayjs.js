const array1 = ["sankar","gowtham","ravi"]
const array2 = [1,true,"rahul",99909090909.0909]


console.log(array1);
console.log(array1.length)
console.log(array1[0]);

console.log(JSON.stringify(array1))


// Methods

// Add elements to the last index
array1.push("mukesh")
console.log(array1);

// Add elements to first index
array1.unshift("rahul")
console.log(array1)


// delete the last index using pop
array1.pop()
console.log(array1);

// delete the first index using shift
array1.shift()
console.log(array1)


// join method
console.log(array1.join("*"));


// concat used for mergin two arrays
console.log(array2.concat(array1))

// slice
console.log(array2.slice(0,2));



// Re assigning value
array1[1]= "gowtham"
console.log(array1)             // ['sankar', 'mukesh', 'ravi']

//  deleting and inserting elements using splice


//  syntax    array1.splice(index , no.of elements to be delete , inserting values (optional))
array1.splice(1,0,"mukesh")
console.log(array1);

// delete 1 element at index of 1 and insert ramesh at index 1
array1.splice(1,1,"ramesh")
console.log(array1)


// just deleting value at index 1
array1.splice(1,1)
console.log(array1)



// LOOPS
console.log("Loops");

const array3  = [
    {"name":"sankar","age":20} , 1, true 
]

//  normal for loop

for(let i=0;i<array3.length;i++){
    console.log(array3[i])
}


//  for in   which returns indexes
for(let i in array3){
console.log(array3[i]);
}



// for of   which return direct elements in array
for(let i of array3){
   if(typeof i === 'object'){
       for(let j of Object.keys(i)){
            console.log(j);
        }
    }
}



// map , filter, reduce  ====> higher order function which return new  array

console.log(array3);

// map

const logginedUser  = "sankar@1"

const socialMediaProfile = [
    {
        "name":"sankar",
        "age":20,
        "username":"sankar@1"
    },
    {
        "name":"gowtham",
        "age":21,
        "username":"gowtham@1"
    },
    {
        "name":"mukesh",
        "age":22,
        "username":"mukesh@1"
    }
]


socialMediaProfile.map(social => 
    {
    //    console.log(social.username)
       social.username === logginedUser ?  console.log(social)  :  ""
    }
)

// map

const mapArray = socialMediaProfile.map(social => {return social})

console.log(mapArray)

// filter 
const filterArray  = socialMediaProfile.filter(social=>{
    return social.username === logginedUser
})
console.log(filterArray);


// reduce
const reduceArray = socialMediaProfile.reduce((x,y)=>{
    return x.age+y.age
})
console.log(reduceArray)


