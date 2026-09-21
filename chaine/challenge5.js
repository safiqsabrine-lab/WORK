const prompt = require('prompt-sync')();
let chaine=prompt("entrez une chaine:");
let inversse ="";
for(i =chaine.length-1 ;i>=0 ;i-- ){
inversse=inversse+chaine[i];
}
console.log("voici l'inverss:"+inversse);