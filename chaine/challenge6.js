const prompt = require('prompt-sync')();
let chaine=prompt("entrez une chaine:");
let caractére=prompt("entrez un caractére:")
let a=[]
for (let i = 0; i <=chaine.length; i++) {
    if (caractére===chaine[i] ){
        a++
    }
}
console.log(a)


