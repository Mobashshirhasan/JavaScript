// Immediately Invoked Function Expression (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){  //wraped it with parenthesis it will get executed.
    console.log(`DB CONNECTED`); //global scope ke pollution se bachne k lie iife ka use kie 
})(); // if we don't use semicolon then it will not understand where to stop the function


(function aurcode(){  
    console.log(`DB CONNECTED TWO`);
})();


((name) => {  
    console.log(`DB CONNECTED TWO ${name}`);
})("Mobashshir")