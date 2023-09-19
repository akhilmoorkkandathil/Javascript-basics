const square = (num) =>{
    return num**2;
}

const sumOfSquare=(num1,num2) =>{
    return (square(num1)+square(num2));
}

const value=sumOfSquare(4,5);
console.log(value);
