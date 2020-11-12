var name = prompt("Qual è il tuo nome?");
var surname = prompt("Qual è il tuo cognome?")
var color = prompt("Qual è il tuo colore preferito?")

document.getElementById("nome").innerHTML = "Ciao " + name + " " + surname;
document.getElementById("colore").innerHTML = "Il tuo colore preferito è il " + color;
document.getElementById("password").innerHTML = "Quindi la tua password è: " + name + surname + color + "Covid19";
