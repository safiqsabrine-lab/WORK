let étudiant={
    nom:"salma",
    prenom:"rahi",
    age:18,
    notes:[15 ,13, 10 ,14]

}
console.log(`étudiant:  ${étudiant.nom}  ${étudiant.prenom}`);

console.log("Liste des notes : " + étudiant.notes.join(", "));

let somme = 0;
for (let note of étudiant.notes) {
    somme += note;
}


let moyenne=somme / étudiant.notes.length;
console.log(`moyenne :${moyenne}`);