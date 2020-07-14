function sayHello(arg1, arg2) {
    //console.log('Hello! ', arg1, " you are ", arg2);
    console.log(`Hello ${arg1} you are ${arg2}`);
    return `Hello ${arg1} you are ${arg2}`;
}

const greetJH = sayHello(jaehyup, programmer)

console.log(greetJH)

const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiple: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
}

const plusResult = calculator.plus(5, 5)
console.log(plusResult)