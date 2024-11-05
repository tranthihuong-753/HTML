/*
You will be given an array of drinks, with each drink being an object with two properties: name and price. 
Create a function that has the drinks array as an argument 
and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:
drinks = [  {name: "lemonade", price: 50},  {name: "lime", price: 10}] 

sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}] 
*/

class drink{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

let arrdrink = [new drink("lime", 10), new drink("lemonade", 50), new drink("Coffee", 30)];

var sortdrink = function(arrdrink){
    return arrdrink.sort((a, b) => a.price - b.price);
}

console.log(sortdrink(arrdrink));
