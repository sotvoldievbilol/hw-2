function factorial(n) { 
  if (n === 0 || n === 1) { 
    return 1; 
  } else { 
    return n * factorial(n - 1); 
  } 
} 

let number = prompt("Введите число"); 
let result = factorial(Number(number)); 
alert( result);