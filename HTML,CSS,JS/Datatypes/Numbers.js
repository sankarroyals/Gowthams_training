console.log(1);
console.log(1 == '1')
console.log(1 === '1');
console.log(1 !='1');
console.log(1 !== '1')
console.log(isNaN(1))
console.log(true==1);
console.log(true === 1);
console.log(false == 0);


//  Conversions to Number
let n1 = '1'
console.log(n1)
console.log(+n1);     // simple conerts string to number

console.log(Number(n1))   // conversion using Number function

if( 1 < 2  && 2 < 1 ){
    console.log("and operator");
}

if( 1 < 2  || 2 < 1 ){
    console.log("or operator");
}



console.log("5"+ 5)   // 55 
console.log("5"+"5")
console.log(5+5);


//  Ternary operator
1>2 ? console.log("bigger") : console.log("smaller");


20 + 30 < 50+40  ? (20>30 ? console.log("20 bigger") : console.log("20 smaller")) : console.log("no output")


//  if()

let text = "giri"
if(text === "sankar") {
    console.log(`${text}`);
}
else if(text=="rahul"){
    console.log("rahul");
}
else{
    console.log("not sankar")
}



// switch 
switch(text){
    case "sankar":
        console.log("sankar")
    case "rahul":
        console.log("rahul");
    default:
        console.log("no user")
}





