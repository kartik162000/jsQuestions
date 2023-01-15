function largeEvenNoReg(nums)
{
    let max_element=-1
    nums.forEach(element => {
     max_element=(element%2==0)?(Math.max(element,max_element)) :max_element
    })
    return max_element;
}

const largeEvenNoArrow = (nums)=>
{
    let max_element=-1
    nums.forEach(element => {
     max_element=(element%2==0)?(Math.max(element,max_element)) :max_element
    })
    return max_element;
}



// let nums=[1,3,5,7,8,10]

// console.log(largeEvenNoReg(nums));
// console.log(largeEvenNoArrow(nums));
module.exports = {largeEvenNoReg, largeEvenNoArrow};

