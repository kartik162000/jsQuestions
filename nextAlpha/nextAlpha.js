function nextAlphaRegular(input)
{
    let finalString = "";
    for(let idx=0; idx<input.length; idx++)
    {
        let charCode = input.charCodeAt(idx) + 1;
        if(charCode == 123)
        {
            finalString += 'a';
            continue;
        }
        if(charCode == 91)
        {
            finalString += 'A';
            continue;
        }
        let char = String.fromCharCode(charCode);
        finalString += char;
    }
    return finalString;
}

const nextAlphaArrow=(input) =>
{
    let finalString = "";
    for(let idx=0; idx<input.length; idx++)
    {
        let charCode = input.charCodeAt(idx) + 1;
        if(charCode == 123)
        {
            finalString += 'a';
            continue;
        }
        if(charCode == 91)
        {
            finalString += 'A';
            continue;
        }
        let char = String.fromCharCode(charCode);
        finalString += char;
    }
    return finalString;
}


// let input="lazyinterns"
// console.log(nextAlphaRegular(input));
// console.log(nextAlphaArrow(input));
module.exports={nextAlphaRegular,nextAlphaArrow}