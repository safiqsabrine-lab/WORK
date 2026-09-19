const prompt = require('prompt-sync')();
let element =parseInt(prompt("donner le nombre entier "));
let original=[];
for (let i=0; i<element;i++){
     let line=Number(prompt(`Entrez l'élément n°${i + 1}: `));
    original.push(line);}


    let copie=[];


for (let i=0 ; i<original.length ;i++){
    copie[i]=original[i]
}

console.log("original:",original);
console.log("copie:", copie);