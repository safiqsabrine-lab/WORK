const prompt = require('prompt-sync')();
let primeDeBase =500;
let age =parseInt(prompt("Age du conducteur:"));
let type =parseInt(prompt("type(1:sportive, 2:utilitaire, 3:familaile):"));
let accedents =parseInt(prompt("nombre d'accidents (5derniéres années):"));

if (age<25) {
 primeDeBase *=1.5;
}
else if (age>65) {
primeDeBase *=1.2;
}
if (type===1) {
primeDeBase *=2;
}
else if (type===2) {
primeDeBase *=1.2;    
}
else if (type===3) {
 primeDeBase *=1.1;
}
if (accedents >1){
 primeDeBase *=1.3;
}
console.log(`votre prime d'assurance sera de:${primeDeBase}£`);






/*Âge du conducteur (en années)
Type de voiture (1 pour sportive, 2 pour utilitaire, 3 pour familiale)
Nombre d'accidents au cours des 5 dernières années
Les règles de calcul sont :
Conducteur de moins de 25 ans : Prime de base * 1.5
Conducteur de 25 à 65 ans : Prime de base
Conducteur de plus de 65 ans : Prime de base * 1.2
Type de voiture sportive : Prime * 2
Type de voiture utilitaire : Prime * 1.2
Type de voiture familiale : Prime * 1.1
Nombre d'accidents > 1 : Ajoutez 30% à la prime
*/