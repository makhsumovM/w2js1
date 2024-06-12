//task 1
/*function modifyLast(str,num){
 
    let oxiron = str.at(-1);
    return str.substring(0,str.length - 1) + oxiron.repeat(num)

}
console.log(modifyLast("Hello",3));
console.log(modifyLast("excuse me what?",5));*/


// task 2
/*function firstLast(str){
    let f = str.at(0);
    let l = str.at(-1);
    return f+l;
}
console.log(firstLast("ganesh"));*/

//task 3  - nafahmidm - console.log(typeof toInt(str)); 
/*
function toInt(str) {
    if (typeof(str) === 'number') {
        return str.toString();    
    } else {
        return parseInt(str);
    }
}
console.log(typeof toInt(77));  
console.log(typeof toInt("77"));  
*/

//task 4 

/*function isPlural(str){
     if(str.at(-1)=='s'){
        return true;
     }
     else{
        return false;
     }

}
console.log(isPlural("changes"));
console.log(isPlural("change"));*/


/// task 5

/*function reverseCapitalize(str){
    let cnt = '';
    for(let i = str.length - 1; i>=0; i--){
        cnt += str[i];
    }
    return  cnt.toUpperCase();
}
console.log(reverseCapitalize("hellothere"));*/


///task 5
/*
function reverseCapitalize(str){
   
    return str.split('').reverse().join('');
}
console.log(reverseCapitalize("hellothere"));*/