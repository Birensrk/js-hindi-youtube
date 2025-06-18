// Immediately invoked function expression (IIFE)

(function chai (){
    // named IFEE
    console.log(`DB CONNECTED`);
    
})();

(  (name) => {
    // unnamed IFEE simple IFEE
    console.log(`DB CONNECTED TWO ${name}`)
} )('hitesh')
