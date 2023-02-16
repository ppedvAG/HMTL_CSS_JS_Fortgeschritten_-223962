const passwordInpu = document.querySelector("#password");

passwordInpu.addEventListener("focus", function (ev) {
    if (passwordInpu.validity.valueMissing) {
        passwordInpu.setCustomValidity("Das Passwort darf nicht leer sein.123");
        passwordInpu.reportValidity();
    }else {
        passwordInp.setCustomValidity("");
    }
});


// Mögliche validity Props
/*
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher ist als im max-Attribut bestimmt
    rangeunderflow - Wert niedriger ist als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
*/


passwordInpu.addEventListener("keyup", function (ev) {
    if (passwordInpu.validity.tooShort) {
        passwordInpu.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInpu.value.length} Zeichen.`);
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInpu.reportValidity();
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInpu.setCustomValidity("");
    }
})


document.querySelector("form").addEventListener("submit", function (ev) {
    // Auf die Form angewendet verhindert event.preventDefault() das Neuladen der Seite bei senden der Form
    ev.preventDefault();
})




// Wir holen unsere Inputs als Referenz
const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");



function checkPlz() {
    // Hier legen wir unsere Einschränkungen fest, in diesem Fall wie dei PLZ aufgebaut sind
    const constraints = {
        // Zwei \ um den zweiten \ zu escapen
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 or 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-75012 or 75012"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-12345 or 12345"]
    }

    // Hier nehmen wir uns die tatsächlichen Textwerte aus den Inputs
    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    // Hier wird eine konkrete Einschränkung ausgewählt basierend auf dem ausgewählten Land
    const constraint = new RegExp(constraints[countryValue][0], "");

    // Hier wird geprüft ob die PLZ mit der RegEx aus constraint übereinstimmt
    if (constraint.test(zipCodeValue)) {
        // Falls ja wird die CustomValidity auf ein leeren String gesetzt => Input ist gültig
        zipCode.setCustomValidity("");
    }
    else {
        // Falls es nicht mit der RegEx übereinstimmt, setzen wir die Fehlermeldung auf die im Array enthaltene
        zipCode.setCustomValidity(constraints[countryValue][1]);
        // Mit reportValidity wird die Fehlermeldung im Browser sofort angezeigt und nicht erst nach klick auf submit
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPlz);
country.addEventListener("input", checkPlz);