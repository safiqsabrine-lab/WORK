
  const prompt = require('prompt-sync')();
let revenu =parseFloat(prompt("quel est votre revenu annuel?"));
let score =parseInt(prompt("quel est votre score de cridit (sur1000)?"));
let duree =parseInt(prompt("quel est la durée du pret(en années)?"));

if (revenu>=30000 && score >=700 && duree <=10) {
    console.log("status :éligible");
}
else if(revenu>=30000 && score >=650 && duree<=10){
    console.log("status:éligible avec conditions");
}
else{
    console.log("status:non éligibile ");
}

