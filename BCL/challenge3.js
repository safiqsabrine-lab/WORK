const prompt = require('prompt-sync')();
let n=parseInt(prompt("entrez un nombre entier positif facto:"));
let facto=1;
for (let i=1 ;i<=n ;i++){
    facto +=i;
}
console.log(`${n}=${facto}`);