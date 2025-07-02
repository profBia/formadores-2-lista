let linguagens = ["JavaScript","Python","C++"];​
console.log(linguagens[0]) // “JavaScript”
console.log(linguagens[1]) // “Python”
console.log(linguagens[2]) // “C++”

const item = document.querySelector("#lista");
item.textContent = linguagens[0];

item.textContent = linguagens[0] 
+ "-"  + linguagens[1]  + "-"  + linguagens[2];
