function concatStringRegular(input)
{
    return input[0].substr(1,input[0].length)+input[1].substr(1,input[1].length);
}
const concatStringArrow=(input) =>
{
    return input[0].substr(1,input[0].length)+input[1].substr(1,input[1].length);
}


let input=["code", "academy"]
console.log(concatStringRegular(input));
console.log(concatStringArrow(input));
