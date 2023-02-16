/* 

Mehrzeiliges Kommentar 


*/

//Ich bin Einzeilig 


// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht


//Ausgaben in der Konsole
console.log("Hallo Welt!");
//console.table(/*array auslistungen*/);
console.error("Da lief etwas schief");
console.info("Ich bin eine Information");



//Variablen definieren 

//Moderne Variante
let firstName = "Max";
let age = 18;

// Syntax:
// let identifier = Wert;
// identifier muss mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive

//Alternativ zu let
const lastName = "Mustermann";
//Funktioniert wir let, kann aber nicht neu Zuweisungen bekommen (ist Konstant)

//Ausgeben von Variablen in einer Konsole
console.log(firstName);

//Zeigt keinen Benefitz (Ausgabe wie bei log) 
console.table(firstName);

console.log("Hallo " + firstName + " " + lastName);

// Interpolierter String:
console.log(`Hallo ${firstName} ${lastName} `);


// String Zeichenfolge
// Strings werden von "" oder von '' 
console.log('Er sagt: "Hallo Welt!"');
console.log("Er sagt: 'Hallo Welt!'");

//Escape Sequenzen 
console.log("Hallo \t in der nächsten Zeile \n steht dieser Text");
console.log("Er sagt: \"Hallo Welt!\"");


// number 
// Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximaler Wert: 1.7976931348623157e+308



// Artihmetischen Oepratoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit dem Zuweisungsoperator kombiniert werden
zahl *= 4;
// zahl = zahl * 4;



//Inkrementieren und Dekrementieren
let myNumber = 10;

console.log(myNumber++); //10

myNumber = 10;
console.log(++MyNumber); //11


//Modulo 
console.log(65 * 2 % 4); //130 % 4 = 32 Rest 2:

// boolean
// true/false
let alleAnwesend = true;
let kursEnde = false;
// Wird meistens für Vergleiche und if-Blöcke benutzt


// null
// Ist die absichtlich eZuweisung keines Wertes
// Bedeutet die Abwesenheit von Daten
let nichts = null


// undefined
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wurde


// typeof(variable/wert)
console.log(typeof(firstName));
// erlaubt das prüfen von Datentypen

//Scope
//Unterschied zwischen let, const, und var

let x;
var y;
const z=5;

//1. Unterschied: const muss sofort mit einem Wert initialisiert werden 
// var und let können später initialisiert werden 

x = 12;
y = 15;

w = 15;
console.log(w);
var w;
// Wenn wir ganz ohne Keyword einer Variable einen Wert zuweisen wird sie als globale Eigenschaft des window-Objekts erstellt
// SCHLECHTE FORM!
// Geht nicht
// ww = 15;
// console.log(ww);
// let ww;
// 4. Unterschied:
// var kennt den Blockscope nicht
// let schon


//
{
    //lokale Variable -> gilt nur innerhalb des Codeblocks 
    let block1 = "Hallo!"; 

    //globale Variable
    var block2 = "Bye!";
}

console.log(block1); //Fehler würde entstehen
console.log(block2); //wird ausgegeben 






