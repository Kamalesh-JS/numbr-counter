/*console.log("Kamalesh")
window.alert('Guess who has started CDA')
//comment
*/
/*document.getElementById("name").textContent="Hello Kamalesh"
let x
x=10;
let y=20
sum=x+y
console.log(sum)*/
/*let x 
let y
let z
x="Kamalesh"
y=21
z="Calisthnics intermediate level by 2025"
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)
console.log(`My name is ${x}`)
console.log(`My age is ${y}`)
console.log(`My goal of this year is to achieve ${z}`)*/
/*let name
name=window.prompt(`what is ur name?:`)
console.log(name)*/
/*
let username
let dom
document.getElementById("button").onclick=function(){
    username=document.getElementById("inp").value;
    dom=document.getElementById("name").textContent=`Welcome ${username}`;
    }
*/
/*
//typeconversion
let age
age=window.prompt(`Enter your age`)
age=Number(age)
age+=1
console.log(age)
*/
/*
math function
let x=10
console.log(Math.round(x))
*/

let increasebutton=document.getElementById("inc")
let resetbutton=document.getElementById("reset")
let decreasebutton=document.getElementById("dec")
let zero=document.getElementById("zero")
let count=0;
increasebutton.onclick=function(){
    count+=1;
    zero.textContent=count;
}
resetbutton.onclick=function(){
    count=0;
    zero.textContent=count;
}
decreasebutton.onclick=function(){
    count-=1;
    zero.textContent=count;
}
let x=10.4
console.log(Math.round(x))