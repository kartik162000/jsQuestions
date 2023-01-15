function containScriptRegular(input) {
    if(input.endsWith("Script") && input.length >= 6)
    {
        return true;
    }
    return false;
}

// Arrow function using ternary operators
let containScriptArrow=(input) => {
    let ans = (input.endsWith("Script")) ? (input.length >= 6) ? true : false : false;
    return ans;
}

// console.log(containScriptRegular('JavaScript'));
// console.log(containScriptArrow('javascript'));

module.exports={containScriptArrow,containScriptRegular};