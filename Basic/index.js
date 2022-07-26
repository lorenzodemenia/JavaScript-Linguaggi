
// per istanziare una variabile si usa il let e non il var 
// è preferibile scrivere più parole usando come separazione la maiuscola (cummel notation)
// sono case-sensitive, quindi se vado a creare un'altra variabile cambiano una lettera nel nome è come avere due variabili diverse 
let firstName = 'Lorenzo', secondName = 'Francesca';

console.log(firstName, secondName); // va a printare il contenuto di name 
 
// possiamo rendere il valore di una variabile costante usando il const, in questo modo se provassimo a cambiarlo ci verrebbe un errore 
const lastName = 'Demenia';
// modificandolo in questo modo ci viene fuori un errore 
// lastName = 'Mona';
console.log(lastName);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 1
console.log( typeof selectedColors[2]);

function greet(name, surname){
    console.log(name+' '+surname);
    return name+' '+surname;
}

console.log('Second:'+' '+greet('Lorenzo','Demenia'));