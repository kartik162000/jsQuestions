function largeEvenNoReg(nums)
{
    let max_element=Number.MIN_VALUE
    let flag=0;
    nums.forEach(element => {
     max_element=(element%2==0)?(Math.max(element,max_element), flag=1) :max_element
    })
    // console.log(max_element);
    return (flag==1)? max_element: -1;
}

const largeEvenNoArrow = (nums)=>
{
    let max_element=Number.MIN_VALUE
    let flag=0;
    nums.forEach(element => {
     max_element=(element%2==0)?(Math.max(element,max_element), flag=1) :max_element
    })
    return (flag==1)? max_element: -1;
}



let nums=[1,3,5,7,9]

console.log(largeEvenNoReg(nums));
console.log(largeEvenNoArrow(nums));
