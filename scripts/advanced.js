

//syntatic sugar 
class Person {
    //Mit hashtag definieren ich privates Feld 
    //Kann nur noch durch Klassen-Methoden aufgerufen werden 

    #age; 

    constructor (firstName, lastName, age, gender) {
        this.firstName = firstName; //public property
        this.lastName = lastName;//public property
        this.#age = age;
        this.gender = gender; //public property
    }

    //Setter/Getter -> sind auch public 
    set age(newAge) {
        console.log("setter wurde aufgerufen");
        if (newAge < this.age) {
            console.error("Man kann nicht jünger werden!");
        }
        else {
            this.#age = newAge;
        }
    }

    get age() {
        return this.#age;
    }

    //private Methoden 
    #introduce() {
        return `Hi my name is ${this.firstName} ${this.lastName}!`;
    }

    //public-Methode 
    introduceSelf() {
        console.log(this.#introduce());
        return this.#introduce();
    }
}

const p1 = new Person("Max","Mustermann", 29, "male");
p1.introduceSelf();
//public property wird drangehongen 
//p1.haribo =123;
//console.log(p1.age);
//console.log(p1);
//console.table(p1);


class Student extends Person {

    constructor(firstName, lastName, age, gender, schoolClaas) {
       super(firstName, lastName, age, gender);

       //Studend spezifische Property 
       this.schoolClaas = schoolClaas;
    }

    //Math.Random -> höchste Zufallszahl ist die 0.9999999
    showGrade() {
        return Math.floor(Math.random() * 6) +1;
    }

    introduceSelf() {
        console.log(`My name ist ${this.firstName} and I'm in class ${this.schoolClaas}`);
    }

        // Keine überladung
    // introduceSelf(test) {
    //     console.log(`My name is ${this.firstName} and I'm in class ${this.schoolClass} ${test}`);
    // }
    // Trick zur Überladung: https://www.geeksforgeeks.org/function-overloading-in-javascript/
}

const p2 = new Student("Erika", "Musterfrau", 21, "female", 15);
p2.introduceSelf();

// Erstellt eine Klasse Teacher, die von Person abgeleitet wird und zusätzlich ein private field mit subject hat
// Die Methode introduceSelf() soll erweiter oder überschrieben werden um zusätzlich das subject anzuzeigen
// Zusätzlich einen getter und setter für subject erstellen

class Teacher extends Person {
    #subject;

    constructor(firstName, lastName, age, gender, subject) {
        super(firstName, lastName, age, gender);
 
        //Studend spezifische Property 
        this.#subject = subject;
     }

     //Setter/Getter
    set subject(newSubject) {
        this.#subject = newSubject;
    }

    get subject() {
        return this.#subject;
    }

    introduceSelf() {
        console.log(`My name ist ${this.firstName} ${this.lastName} und unterrichte ${this.subject}`);
    }
}


const p3 = new Teacher("Johannes", "Pfeiffer", 58, "male", "Mathe");

p3.subject = "Sport";
p3.introduceSelf();



//Lambdas

//Sind die kürzere alternative zu den anonymen Funktionen
//Nennt man auch Preil oder Arrow Functions
//Werden höufig auch als Parameter für andere Funktionen benutzt
//Sparen function Keyword, Klammern und return ein solange sie einzeilig sind

const add = (num1, num2) => num1 + num2; 
let sum = add(5,8);


//array bezogene Funktionen 
const numArr = [1,2,3,4,5,6,7,8,9,10];




// arr.forEach(callback)
// Iteriert über jedes Element des Arrays und führt damit die callback-Methode aus

function logNumber(num) {
    console.log(num);
}

//Was passiert hier? 
numArr.forEach(logNumber); 

console.log("Jetzt mit Lambda");
numArr.forEach((num, index) => {
    console.log("Nummber: " + num + " | Index: " + index);
});


//arr.filter(callback); 
//Gibt ein neues Array zurpck, das aus den Elemtnen des Array besteht auf denen die Callback-Funktion angewendet wurde

//Ermitteln von gerade Zahlen
let evenNums = numArr.filter((num) => num % 2 === 0);
let oddNums = numArr.filter((num) => num % 2 !== 0);

console.log("Gerade Zahlen:")
console.table(evenNums);




console.log("Map-Beispiel: ")
//arr.map(callback)
//Gibt ein neues Array zurück, das aud en Elementen des Arrays besteht auf denne die callback Funktion angewendet wurde

evenNums = evenNums.map((num => num*2));
console.table(evenNums);


//arr.reduce(callback(mit zei Parametern))
//Iteriert über das Array und bibt einen einzigen Wert zurück 

sum = numArr.reduce((sum, number) => sum + number);
console.log(sum); //1+2+3+4+5+6+7+8+9+10=55


//arr.every(callback)
//Gibt true zurück, fall der callback bei jedem Element des Arrays true ergibt 
console.log(
    numArr.every((num) => num > 0)
); 
//true 

console.log(numArr.some(
    num => num > 8
));



//arr.fill(neuerWert, StartIndex, EndIndex)
console.log("arr.fill - Beispiel: ");

console.table(evenNums);

evenNums.fill(Math.random() * 20, 3);
console.table(evenNums);



let emptyArr = new Array(20);
emptyArr.fill(5, 0, 3);
console.table(emptyArr);

let arraySize = emptyArr.length;
//In Kombi mit .foreach können wir unser Array mit Zufallswerten füllen
emptyArr.forEach((number, index) => {
    
    if ( (index+1) <= arraySize) {
        let randomNumber = Math.floor(Math.random() * 50) + 1;
        //wäre besser emptyArr.fill(randomNumber, index, index+1);
        //noch besser map - oder eigene Schleife 
        emptyArr.fill(randomNumber, index);
    }
});

//Generatoren in JavaScript

function* numGenerator(limit) {
    for(let i=0; i < limit; i++) {
        yield i;  //return yield 
    }
}

const numbers = numGenerator(10);

// Um auf Werte zuzugreifen muss der Generator gestartet werden
let step = numbers.next();
// step ist nun ein Objekt mit value: 1 und done: false
console.log(step);
console.log(step.value);


step = numbers.next();
// step ist nun ein Objekt mit value: 1 und done: false
console.log(step);
console.log(step.value);


// Können nun so lange numbers.next() aufurufen bis die Endbedingung erreicht ist
// Ab dann ist das objekt value: undefined und done: true
// Anwendungsfall: id-Generator





