function countVowelRegular(input)
{
    let count=0;
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"]
    input.split('').map(letter => {
        count=vowels.includes(letter)?count+1:count;
    });
    return count;
}
const countVowelArrow=(input) =>
{
    let count=0;
    const vowels = ["a", "e", "i", "o", "u","A","E","I","O","U"]
    input.split('').map(letter => {
        count=vowels.includes(letter)?count+1:count;
    });
    return count;
}


let input="codeacademy"
console.log(countVowelRegular(input));
console.log(countVowelArrow(input));
