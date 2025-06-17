

function SayMyName() {
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");
}

// SayMyName()

// function AddTwoNumbers(number1, number2) {
 
//     console.log( number1 + number2);
    
    

// }

function AddTwoNumbers(number1, number2) {
 
//    let result = number1 + number2
//    return result
return number1 + number2
   
   
    
    

}

 const result = AddTwoNumbers(3, 5)

//  console.log("Result", result);

function LoginUserMessage(username = "sam",){
    if(!username){
        console.log("please enter a user name");
        return
        

    }
    return`${username} just logged in`
}

// console.log(LoginUserMessage("hitesh"))

function CalculateCartPrice(val1, val2, ...num1){
    return num1 

}

// console.log(CalculateCartPrice(200, 400, 500, 2000))
 
const user = {
    username: "hitesh",
    prices: 199
}

function HandleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

// HandleObject(user)

HandleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]

}

// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400, 100, 600]));




