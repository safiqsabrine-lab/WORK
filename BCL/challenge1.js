const prompt = require('prompt-sync')();
let n=parseInt(prompt("entrez un nombre entier positif factorielle:"));
let factorielle =1;
for (let i =1;i <=n; i++ ) {
    factorielle *=i;
}
console.log(`${n}!=${factorielle}`);