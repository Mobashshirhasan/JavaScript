const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}` );
//     return acc + currval    
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)


console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "react course",
        price: 599
    },
    {
        itemName: "css course",
        price: 599
    },
    {
        itemName: "Java course",
        price: 599
    },

]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceTopay);
