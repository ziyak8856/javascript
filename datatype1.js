// typeof operator
let age=22;
let name="ziya khan";
console.log(typeof age);
console.log(typeof name);
//convert number to string
console.log("conversion of num to str");
age=age+"";
console.log(typeof age);
console.log("conversion of str to num");
age= +age;
console.log(typeof age);

console.log("way2 by typecasting");
console.log("conversion of num to str");
let no=32;
no=String(no);
console.log(typeof no);
console.log("conversion of str to num");
no=Number(no)
console.log(typeof no);
// concate
console.log("concate:");
let fname="ziya";
let lname="khan";
let full=fname+" "+lname;
console.log(full);
let no1="17";
let no2="13";
console.log(+no1+ +no2);
