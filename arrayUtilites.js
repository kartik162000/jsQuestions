const doubleNumbers=(numbers)=>{
    if(!Array.isArray(numbers))
    throw new Error('You must provide a number.');
    return numbers.map(num=>num*2)
}
const tripleEvenNumbers=(numbers)=>{
    if(!Array.isArray(numbers))
    throw new Error('You must provide a number.');
    if(numbers.some(isNaN))
    {
        throw new Error('invalid array input');
    }
    return numbers.map(num=>num*3).filter(num=>num%2==0)
}


const tripleEvenNumbersReduce=(numbers)=> numbers.reduce((acc,item)=>{
        if((item*3)%2==0)
        acc.push(item*3);
        return acc;
    },[])

module.exports={doubleNumbers,tripleEvenNumbers,tripleEvenNumbersReduce};