//variables para grupo
let minGrupo = 0;
let maxGrupo = 3;
let grupo = [];
let contGrupo = 1;
const jsonGrupos = ["BEBES","NIÑOS","ADULTOS"];

//variables para largo pierna
var largoPierna = [];
let contPierna = 1;
const jsonVarsLargoPierna = {
  "1": { "largoPiernaMin": 6, "largoPiernaMax": 15 },
  "2": { "largoPiernaMin": 8, "largoPiernaMax": 30 },
  "3": { "largoPiernaMin": 9, "largoPiernaMax": 30 },
};


//variables para largo puño
const largoPuno = [];
let contPuno = 1;
const jsonVarsLargoPuno = {
  "1": { "largoPunoMin": 1, "largoPunoMax": 2 },
  "2": { "largoPunoMin": 1, "largoPunoMax": 5 },
  "3": { "largoPunoMin": 1, "largoPunoMax": 7 },
};


// For para Grupo
for (let y = minGrupo ; y <= maxGrupo ; y++) {
    tJsonGrupo = {id:contGrupo ++, name: jsonGrupos[y]};
    grupo.push(tJsonGrupo);
    delete(grupo[3]);
  }
  

// For para largo pierna
for (let keyPierna in jsonVarsLargoPierna) {
  var tLargoPiernaMin = jsonVarsLargoPierna[keyPierna]["largoPiernaMin"];
  var tLargoPiernaMax = jsonVarsLargoPierna[keyPierna]["largoPiernaMax"];
  for (let i = tLargoPiernaMin; i <= tLargoPiernaMax; i++) {
    tJsonPierna = { id: contPierna++, groupId: keyPierna, name: i };
    resultadoPierna = largoPierna;
    resultadoPierna.push(tJsonPierna);
  }
}

//  For para largo puño
for (let keyPuno in jsonVarsLargoPuno) {
  var tLargoPunoMin = jsonVarsLargoPuno[keyPuno]["largoPunoMin"];
  var tLargoPunoMax = jsonVarsLargoPuno[keyPuno]["largoPunoMax"];
  for (let j = tLargoPunoMin; j <= tLargoPunoMax; j++) {
    tJsonPuno = { id: contPuno++, groupId: keyPuno, name: j };
    resultadoPuno = largoPuno;
    resultadoPuno.push(tJsonPuno);
  }
}


console.log("------------------------ grupo ----------------------");
console.log(grupo);

console.log("------------------------ Largo pierna ----------------------");
console.log(resultadoPierna);

console.log("------------------------ Largo puño ----------------------");
console.log(resultadoPuno);

// Mapeamos los jsons para traer los ids
grupoMap = grupo.filter((x) => x !== null).map(x => x.id );
piernaMap = resultadoPierna.filter((x) => x !== null).map(x => x.groupId );
punoMap = resultadoPuno.filter((x) => x !== null).map(x => x.groupId );

console.log(grupoMap[0]);


//mostrar las variables de acuerdo a ese id
if(grupoMap[0] == 1){
     resultado = 'Grupo: '+ grupoMap[0] + ', Pierna: '+ piernaMap.slice(0,10);
     console.log(resultado);
}else{
    console.log('error');
}

if(grupoMap[1] == 2){
    resultado = 'Grupo: '+ grupoMap[1] + ', Pierna: '+ piernaMap.slice(10,33);
    console.log(resultado);
}else{
    console.log('error');
}

if(grupoMap[2] == 3){
    resultado = 'Grupo: '+ grupoMap[2] + ', Pierna: '+ piernaMap.slice(33,55);
    console.log(resultado);
}else{
    console.log('error');
}