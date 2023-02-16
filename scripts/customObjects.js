// Objects

// An sich eine Sammlung von Schlüssel:Wert Paaren
// Diese Schlüssel nenn wir Properties
// Außer wenn es sich bei den Werten dieser properties um Funktionen handelt 
// Dann sprechen wir von Methoden

//Wie initialisiere ich Objekte? 
//3 verschiedene Möglichkeiten 

//Beispiel1:

const objectLiteral = {
    "name" : "Max Mustermann",
    "age" : 34,
    "employed" : true,
    "cityOfOrigin" : "Munich"
};

// Property-Namen können auch ohne "" oder '' definiert werden
// Anführungszeichen sind erst absolut notwendig wenn es sich beim prop-Namen nicht um einen gültigen JS Identifier handelt
// Kann mit oder ohne trailing Komma definiert werden

//Beispiel2
const constructedObject = new Object(); 
//Erstellen ein leere Objekt

// Wie erstelle ich dynamische Props?
// dynamische Props sind Props, die wir nach der Erstellung des Objektes hinzufügen
constructedObject.name = "Test Testermann";
constructedObject.age = 45; 
constructedObject.employed = false; 
constructedObject["cityOfOrigin"] = "Berlin";


// 3. shorthand
//Gibt es ES6 

let person2Name = "Erika Musterfrau";
let person2Age = 22;
let person2Employed = true;
let person2CityOfOrigin = "Vienna";

const shorthandObject = {
    person2Name,
    person2Age,
    person2Employed,
    person2CityOfOrigin
};


// Wie greife ich auf Props eines Objektes zu?
// 1. Bracket-Notation
// Objekte verfügen nicht über indizes
console.log(objectLiteral["name"]); // => Max Mustermann
console.log(shorthandObject["person2Name"]) // => Erika Musterfrau
// Die Bracket Notation funktioniert immer, auch wenn es sich beim Namen des Props um keinen gültigen Identifier handelt, z.B. wenn dieser leerzeichen enthält

// 2. dot-Notation
console.log(objectLiteral.cityOfOrigin); // => Munich
console.log(shorthandObject.person2Age); // => 22

function introduce() {
    console.log(`Hallo! Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt.`);
}

function Person(nameprop, age, employed, cityOfOrigin) {
    //Properties zu unserem 'Object'
    this.name = nameprop;
    this.age = age;
    this.employed = employed;
    this.cityOfOrigin = cityOfOrigin;
    this.introduceSelf = introduce; //Achtung eine Methode wird an das 'Object' drangehängt 
}

const person1 = new Person ("Otto Walkes", 55, true, "Friesland");
const person2 = new Person ("Luke Skywalker", 23, true, "Tattoin");


console.log(person1.name);
console.log(person2.cityOfOrigin);


// Moderne Variante des Konstruktors:
// Ist syntactic Sugar, d.h. es ist eine rein sytnaktische Verbesserung mit keiner Änderung an der Funktionalität


class PersonAlt {
    constructor (nameProp, age, employed, cityOfOrigin) {
        this.name = nameProp;
        this.age = age;
        this.employed = employed;
        this.cityOfOrigin = cityOfOrigin;
    }

    introduceSelf() {
        console.log(`Hallo mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`);
    }
}

const person3 = new PersonAlt("George Clooney", 60, true, "Los Angeles");
person3.introduceSelf();
