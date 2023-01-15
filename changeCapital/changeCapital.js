function changeCapitalReg(inputs)
{
    let input=inputs.split(' ');
    let l="";
    let sen=[];
    input.forEach(words => {
words.split('').map((letter,index)=>{
letter=(words.charCodeAt(index) >= 65 && words.charCodeAt(index) <= 90)? letter.toLowerCase(): letter.toUpperCase()
            l+=letter;
        });
        sen.push(l);
        l="";
    });
    return sen.join(" ");
}

 const changeCapitalArrow=(inputs)=>
{
    let input=inputs.split(' ');
    let l="";
    let sen=[];
    input.forEach(words => {
words.split('').map((letter,index)=>{
letter=(words.charCodeAt(index) >= 65 && words.charCodeAt(index) <= 90)? letter.toLowerCase(): letter.toUpperCase()
            l+=letter;
        });
        sen.push(l);
        l="";
    });
    return sen.join(" ");
}


let inputs="MeRRy hAD a LITTle lAMp"
console.log(changeCapitalReg(inputs));
console.log(changeCapitalArrow(inputs));
