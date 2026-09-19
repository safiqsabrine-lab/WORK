const prompt = require('prompt-sync')();
let n=parseInt(prompt("entrez un nombre entier:")); 

let b=0;

while (n>0){
  b= (b * 10 + ( n % 10 ));
  Math.floor( n / 10 );

}
console.log(b )
