// for

for (let i = 0; i <= 10; i++){ // 1st i will initialize, then condition will check 
    const element = i;
    if (element == 5){
        // console.log("5 is  the best element");
    }
    // console.log(element);
}

// console.llog(element); out of scope


for (let i = 0; i <=10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j = 0; j <= 10; j++){
        // console.log(`Inner loop value ${j} and inner loop value is ${i}`)
        // console.log(i + '*' + j + '=' + i*j);
    }
}

let myArray = ["Flash", "batman", "superman"]

for(let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    // console.log(element);
}


//break and continue

for (let index = 1; index <= 20; index++){
    if(index  == 5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
}



for (let index = 1; index <= 20; index++){
    if(index  == 5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
}