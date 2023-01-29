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


socialMediaProfile.map(social =>{
    // console.log(social)
    Object.entries(social).map(s=>{
        console.log(s);
    })
    Object.keys(social).map(s=>{
        console.log(s);
    })
    Object.values(social).map(s=>{
        console.log(s);
    })
})



//Accessing
console.log(socialMediaProfile[0].username)
console.log(socialMediaProfile[0]['username'])

// update

socialMediaProfile[0]['username'] = "mukesh@12"
console.log(socialMediaProfile[0]['username'])

// delete
delete socialMediaProfile[0]['username']
console.log(socialMediaProfile[0]['username'])



socialMediaProfile.push({
    
    "name":"rahul",
    "age":22,
    "username":"rahul@1"
})
console.log(socialMediaProfile);