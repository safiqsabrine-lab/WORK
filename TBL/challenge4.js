const prompt = require('prompt-sync')();
let nombre=parseInt(prompt("Entrez le nombre d'éléments du tableau:"));
let list=[];
let g=0;
for(let i=0 ; i<nombre ; i++){
let element=Number(prompt(`Entrez l'élément n°${i + 1}: `));
list.push(element)
if (g<element){
    g=element
}
}
console.log("le nombre maximin:",g);
