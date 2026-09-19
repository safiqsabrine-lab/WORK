const prompt = require('prompt-sync')();
let nombr =parseInt(prompt("donner le nombre entier "));
let original =[];

for (let i=0; i<nombr;i++){
     let line=Number(prompt(`Entrez l'élément n°${i + 1}: `));
    original.push(line);}

    let inverss=[];
let j=0;

for (let  i=original.length - 1 ;i>0; i--) {
    

    inverss[j]=original[i];
j++;

}
console.log("inversse:", inverss);