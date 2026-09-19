const prompt = require('prompt-sync')();
let n=Number(prompt("entrez la base:"));
let x=Number(prompt("entrez l'exposant:"));

let puissance = 1;
for (let i=1 ; i<=x ; i++ ){
    puissance*=n;
}
console.log(puissance);