let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}

function fromDollarToYen(dollars) {
    return Number((dollars * oneEuroIs.JPY / oneEuroIs.USD).toFixed(2));
}

function fromYenToPound(yen) {
    return Number((yen * oneEuroIs.GBP / oneEuroIs.JPY).toFixed(2));

}

console.log(fromEuroToDollar(1));
console.log(fromDollarToYen(1));
console.log(fromYenToPound(1));


//module.exports = { fromEuroToDollar }
//module.exports = { fromDollarToYen }
//module.exports = { fromYenToPound }
module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };


