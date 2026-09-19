const prompt = require('prompt-sync')();
let Number = parseInt(prompt("Combien d'éléments voulez-vous dans le tableau ?"));


let Tableau = [];


for (let i = 0; i < Number; i++) {
    let valeur = prompt(`Entrez l'élément n°${i + 1} :`);
    
    
    Tableau.push(valeur);
}


console.log("Voici votre tableau :");
console.log(Tableau);