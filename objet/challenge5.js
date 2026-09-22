function infoLivre(titre, auteur, annee) {
    return {
        titre: titre,
        auteur: auteur,
        annee: annee
    };
}
const livre = infoLivre("la peur","oussama hamichi",202);

console.log("Titre :", livre.titre);
console.log("Auteur :", livre.auteur);
console.log("Année :", livre.annee);


