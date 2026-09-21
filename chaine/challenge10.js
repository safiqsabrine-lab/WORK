const prompt = require('prompt-sync')();
let chainepremaire=prompt(":entrez la chaine 1:");
let chainesecandaire=prompt("entrez la chaine 2:");

if(chainepremaire.includes(chainesecandaire)===true){
    console.log("la chaine secandaire est trouvez");
} else{
    console.log("la chaine secandaire ne trouvez pas");
}    
