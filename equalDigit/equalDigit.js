function equalDigitReg(number)
{
    const digits= number.toString().split('').map(Number);
    const allEqual = number => number.every(val => val === number[0]);
    return allEqual(digits);
}

const equalDigitArrow=(number)=>
{
    const digits= number.toString().split('').map(Number);
    const allEqual = number => number.every(val => val === number[0]);
    return allEqual(digits);
}


console.log(equalDigitArrow(2255));
console.log(equalDigitReg(2255));