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
    let result = 0;
    switch(operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            break;
    }
    return result;
};

let setupCalculator = () => {
    const container = document.querySelector(".container");
    const calculator = document.createElement("div");
    calculator.className = `calculator`;
    calculator.style.display = `flex`;
    calculator.style.flexDirection = `column`;
    const rows = [];
    const buttons = [];
    for (let i = 0; i < 10; i++) {
        const button = document.createElement("button");
        button.className = `${i}`;
        button.innerText = `${i}`;
        button.style.minWidth = `40px`;
        button.style.minHeight = `40px`;
        buttons.push(button);
    }
    const operations = ["+", "-", "*", "/", "=", "C"];
    operations.forEach(operation => {
        const button = document.createElement("button");
        button.className = `${operation}`;
        button.innerText = `${operation}`;
        button.style.minWidth = `40px`;
        button.style.minHeight = `40px`;
        buttons.push(button);
    });

    for (let i = 0; i < 4; i++) {
        const row = document.createElement("div");
        row.className = `row${i}`;
        row.style.display = `flex`;
        row.style.flexDirection = `row`;
        row.style.justifyContent = `center`;
        row.style.alignItems = `center`;
        rows.push(row);
    }

    rows.forEach(row => {
        for (let i = 0; i < 4; i++) {
            let btn = buttons.pop();
            row.appendChild(btn);
        }
        calculator.appendChild(row);
    });

    container.appendChild(calculator);
}

setupCalculator();