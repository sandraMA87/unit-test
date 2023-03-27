const { fromEuroToDollar } = require('./app.js')

test('Si ingresamos 1 euro deberia devolver 1.2 USD', () => {
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.2);
});

const { fromDollarToYen } = require('./app.js')

test('Si ingresamos 1 dollar deberia devolver 106.58', () => {
    let total = fromDollarToYen(1);
    expect(total).toBe(106.58)
});

const { fromYenToPound } = require('./app.js')

test('Si ingresamos 1 yen deberia devolver 0,01', () => {
    let total = fromYenToPound(1);
    expect(total).toBe(0.01)
});