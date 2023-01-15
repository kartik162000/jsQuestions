function leapYearRegular(year)
{
    return(((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0))?true:false;
}
const leapYearArrow=(year) =>
{
    return(((year % 4 === 0) && (year % 100 != 0)) || (year % 400 === 0))?true:false;
}


let year=3000
console.log(leapYearRegular(year));
console.log(leapYearArrow(year));
