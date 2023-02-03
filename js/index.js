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


// console.log("------------------------ grupo ----------------------");
// console.log(grupo);

// console.log("------------------------ Largo pierna ----------------------");
// console.log(resultadoPierna);

// console.log("------------------------ Largo puño ----------------------");
// console.log(resultadoPuno);

// Mapeamos los jsons para traer los ids
grupoMap = grupo.filter((x) => x !== null).map(x => x.id );
grupoMapName = grupo.filter((x) => x !== null).map(x => x.name );

piernaMap = resultadoPierna.filter((x) => x !== null).map(x => x.groupId );
piernaMapName = resultadoPierna.filter((x) => x !== null).map(x => x.name );

punoMap = resultadoPuno.filter((x) => x !== null).map(x => x.groupId );
punoMapName = resultadoPuno.filter((x) => x !== null).map(x => x.name );

console.log(grupoMap[0]);


//mostrar las variables de acuerdo a ese id
if(grupoMap[0] == 1){
     resultado = 'Grupo: '+ grupoMap[0] + ', Pierna: '+ piernaMap.slice(0,10);
}else{
    console.log('error');
}

if(grupoMap[1] == 2){
    resultado = 'Grupo: '+ grupoMap[1] + ', Pierna: '+ piernaMap.slice(10,33);
}else{
    console.log('error');
}

if(grupoMap[2] == 3){
    resultado = 'Grupo: '+ grupoMap[2] + ', Pierna: '+ piernaMap.slice(33,55);

}else{
    console.log('error');
}

function myOnLoad() {
    cargar();
}

      //funcion para Cargar  campo <select>
     function cargar() {
        addOptions("grupo", grupoMapName );
        addOptions("largoPierna", piernaMapName.slice(0,10) );
        addOptions("largoPuno", punoMapName.slice(0,2) );
     }
    
      // agregar opciones a un <select>
     function addOptions(domElement, array) {
       var select = document.getElementsByName(domElement)[0];
    
       for (value in array) {
         var option = document.createElement("option");
         option.text = array[value];
         select.add(option);
       }
     }
    
     function doHTML(list){
        let string ="";
        let index = 0;
        list.forEach(element => {
          string += `<option value="sub${index}">${element}</option>`;
          
        });
        return string;
      }
      function dynamicdropdown(sem){
        let subjects1 = piernaMapName.slice(0,10);
        let subjects2 = punoMapName.slice(0,2);

        let subjects3 = piernaMapName.slice(10,33);
        let subjects4 = punoMapName.slice(2,7);

        let subjects5 = piernaMapName.slice(33,55);
        let subjects6 = punoMapName.slice(7,14);

        let genDropdown = document.getElementById("genDropdown");
        let genDropdown2 = document.getElementById("genDropdown2");

        if(sem=="BEBES"){
          genDropdown.innerHTML = doHTML(subjects1);
          genDropdown2.innerHTML = doHTML(subjects2);
        }
        if(sem=="NIÑOS"){
          genDropdown.innerHTML = doHTML(subjects3);
          genDropdown2.innerHTML = doHTML(subjects4);
        }
        if(sem=="ADULTOS"){
          genDropdown.innerHTML = doHTML(subjects5);
          genDropdown2.innerHTML = doHTML(subjects6);
        }
  
      }
      
    //   console.log(grupoMap)
    //   console.log(piernaMap)
    //   console.log(grupoMap[0] = piernaMap.filter((x) => x == piernaMap[0]));
