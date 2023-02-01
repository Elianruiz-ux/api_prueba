let minGrupo = 0;
let maxGrupo = 3;
let grupo = [];
let contGrupo = 1;
const jsonGrupos = ["BEBES","NIÑOS","ADULTOS",];

var largoPierna = [];
let contPierna = 1;
const jsonVarsLargoPierna = {
  "1": { "largoPiernaMin": 6, "largoPiernaMax": 15 },
  "2": { "largoPiernaMin": 8, "largoPiernaMax": 30 },
  "3": { "largoPiernaMin": 9, "largoPiernaMax": 30 },
};

const largoPuno = [];
let contPuno = 1;
const jsonVarsLargoPuno = {
  "1": { "largoPunoMin": 1, "largoPunoMax": 2 },
  "2": { "largoPunoMin": 1, "largoPunoMax": 5 },
  "3": { "largoPunoMin": 1, "largoPunoMax": 7 },
};


// Grupo

for (let y = minGrupo ; y <= maxGrupo ; y++) {
    tJsonGrupo = {id:contGrupo ++, name: jsonGrupos[y]};
    grupo.push(tJsonGrupo);
    delete(grupo[3]);
  }
  
  console.log(grupo);

// Para largo pierna
for (let keyPierna in jsonVarsLargoPierna) {
  var tLargoPiernaMin = jsonVarsLargoPierna[keyPierna]["largoPiernaMin"];
  var tLargoPiernaMax = jsonVarsLargoPierna[keyPierna]["largoPiernaMax"];
  for (let i = tLargoPiernaMin; i <= tLargoPiernaMax; i++) {
    tJsonPierna = { id: contPierna++, groupId: keyPierna, name: i };
    resultadoPierna = largoPierna;
    resultadoPierna.push(tJsonPierna);
  }
}

//  Para largo puño
for (let keyPuno in jsonVarsLargoPuno) {
  var tLargoPunoMin = jsonVarsLargoPuno[keyPuno]["largoPunoMin"];
  var tLargoPunoMax = jsonVarsLargoPuno[keyPuno]["largoPunoMax"];
  for (let j = tLargoPunoMin; j <= tLargoPunoMax; j++) {
    tJsonPuno = { id: contPuno++, groupId: keyPuno, name: j };
    resultadoPuno = largoPuno;
    resultadoPuno.push(tJsonPuno);
  }
}


// function myOnLoad() {
//     cargar();
//    }
// // funcion para Cargar  campo <select>
// function cargar() {
//   jsonGrupos.sort();

//   addOptions("grupo", grupo[1]['name']);
// }

// //  agregar opciones a un <select>
// function addOptions(domElement, array) {
//   var select = document.getElementsByName(domElement)[0];

//   for (value in array) {
//     var option = document.createElement("option");
//     option.text = array[value];
//     select.add(option);
//   }
// }



console.log("------------------------ Largo pierna ----------------------");
console.log(resultadoPierna);

console.log("------------------------ Largo puño ----------------------");
console.log(resultadoPuno);

