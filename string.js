//same as c++
let firstname="  ziya        $";
console.log(firstname[3]);
//size
console.log(firstname.length);
//methods of string
// 1 trim()
//trim give new string to user which remove the spaces 
//from the given string 
let newstr=firstname.trim();
console.log("old str:"+firstname);
console.log(firstname.length);
console.log("new trimed  str:"+newstr);
console.log(newstr.length);
console.log("***about toUppercase/lowercase*** ");
console.log("it return new string ");
let news=firstname.toUpperCase();
console.log(news);
let low=firstname.toLocaleLowerCase();
console.log(low);
console.log("use of slice same as substr an from 0 to n-1 and return the substr");
let substr=newstr.slice(0,3);
console.log(substr);




