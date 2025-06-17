//  singleton 
// Object.create isi ko bolajata hain constructor method through aur isi ke andar singleton banta hain

// object literals 

const mySym = Symbol("key1")

const jsUser = {

    name: "hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    IsLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User");
    
}

jsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());




