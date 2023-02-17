

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


