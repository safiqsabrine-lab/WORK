const prompt = require('prompt-sync')();
let notes =parseInt(prompt("donner le nombre d'éléments:"));
let tableau=[]
let multipe=1;
for(let i=0; i<notes ; i++ ){
     let element=Number(prompt(`Entrez l'élément n°${i + 1}: `));
    tableau.push(element);
    multipe *= tableau[i];
}
console.log("Tableau :", tableau);
console.log("multipe:",multipe );