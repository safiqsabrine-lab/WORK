const prompt = require('prompt-sync')()
let texte1=prompt("entrez la chaine 1:");
let texte2=prompt("entrez la chaine 2:");

if (texte1===texte2) {
    console.log(" les chaînes sont égales");
} else {
    console.log(" les chaînes sont différantes");
}
