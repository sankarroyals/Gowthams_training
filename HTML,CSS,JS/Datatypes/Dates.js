let newDate = new Date()



// small program to display  exact weekday

let weeks = ["sun","mon","tue","wed","thurs","frid","sat"]
console.log(weeks[newDate.getDay()])


console.log(newDate)

console.log(newDate.getDay());
console.log(newDate.getTime());   // milliseconds from 1970 to present it can be used as unique ids 

console.log(newDate.getMonth());  
console.log(newDate.getFullYear())
console.log(newDate.getHours());
console.log(newDate.getMinutes())
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds())


newDate.setDate(7,12,2022)
console.log(newDate);
