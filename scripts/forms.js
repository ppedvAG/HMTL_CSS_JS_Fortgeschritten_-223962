let username = document.querySelector("#username");


//p-Tag für ausgabe
let output = document.querySelector("#output");


username.addEventListener("keyup", e=> {
    //Ich bin eine Lambda - Function und werde aufgerufen, wenn das Event "keyup" bei der Textbox username gedrückt wird 
    console.log(e.target.value);
    output.innerHTML = e.target.value;
});


let password = document.querySelector("#password");
password.addEventListener("keyup", SayHallo);


function SayHallo() {
    console.log("hallo");
}
//weitere Variante 
//document.getElementById("username");


// change => wenn der inhalt verändert wurde
// click => wenn es angeklickt wird
// keyup/keydown beim loslassen/drücken der Taste
// blur => Verlassen des Elements
// focus => Betreten des Elements, also wenn es im focus steht