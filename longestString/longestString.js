function longestStringRegular(inputs)
{
    let ans="";
    inputs.forEach(element => {
    ans=(ans.length>=element.length)?ans:element;
    });
    return ans;
}


const longestStringArrow=inputs=>{
    let ans="";
    inputs.forEach(element => {
    ans=(ans.length>=element.length)?ans:element;
    });
    return ans;
}


let inputs=["we", "love", "code", "acad"]
console.log(longestStringRegular(inputs));
console.log(longestStringArrow(inputs));
