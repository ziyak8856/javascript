let fname="ziya";
let age=22;
let me=`my name is ${fname} and age is ${age}`;
console.log(me);
console.log("null/undefined//bigint:");
let lname;
console.log(lname);
//const give error const shold assign
lname="ziya";
console.log(lname,typeof lname);
console.log("abt null");
let myvar=null;
//nul is object it is bug in js
//not remove becoz of millon line of code we have to change 
//int the world
console.log(myvar,typeof myvar);
console.log("big int");
console.log("range :"+Number.MAX_SAFE_INTEGER);
let mynum=BigInt(1234556676895866333343);
console.log(mynum);
//way 2;
mynum=21n;
console.log(mynum);
console.log("same error when add as c++ 21n+123 error bothe should be bigint");
