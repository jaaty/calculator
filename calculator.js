let add = (...numbers) => {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum;
};

let subtract = (...numbers) => {
    let difference = numbers[0];
    numbers.splice(0, 1);
    numbers.forEach(num => {
        difference -= num;
    });
    return difference;
};

let multiply = (...numbers) => {
    let product = 1;
    numbers.forEach(num => {
        product *= num;
    });
    return product;
};

let divide = (...numbers) => {
    let quotient = numbers[0];
    numbers.splice(0, 1);
    numbers.forEach(num => {
        quotient /= num;
    });
    return quotient;
};

let num1 = 0;
let num2 = 0;
let operator = "";

let operate = (num1, operator, num2) => {
    switch(operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
        default:
            break;
    }
};