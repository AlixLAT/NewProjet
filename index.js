const ecran = document.getElementById("ecran")
const un = document.getElementById("un")
const deux = document.getElementById("deux")
const trois = document.getElementById("trois")
const quattre = document.getElementById("quattre")
const cinque = document.getElementById("cinq")
const six = document.getElementById("six")
const sept = document.getElementById("sept")
const huit = document.getElementById("huit")
const neuf = document.getElementById("neuf")
const zero = document.getElementById("zero")
const clear = document.getElementById("clear")
const fois = document.getElementById("fois")
const moins = document.getElementById("moins")
const diviser = document.getElementById("diviser")
const plus = document.getElementById("plus")
const egal = document.getElementById("egal")


var nombre1 = 0;
var nombre2 = 0;
var operation = 0;

const boutons = document.querySelectorAll("button");
const Ecran = document.getElementById("ecran");


boutons.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const valeurBouton = bouton.textContent;
    ecran.textContent = valeurBouton;


    if (valeurBouton === "Clear") {
      ecran.textContent = ""; 
      nombre1 = "";
      nombre2 = "";
      operation = "";
      return;
    }
    if (valeurBouton === "=") {
      if (nombre1 && nombre2 && operation) {
        let resultat;
        if (operation === "+") {
          resultat = parseFloat(nombre1) + parseFloat(nombre2);
        } else if (operation === "-") {
          resultat = parseFloat(nombre1) - parseFloat(nombre2);
        } else if (operation === "x") {
          resultat = parseFloat(nombre1) * parseFloat(nombre2);
        } else if (operation === "/") {
          resultat = parseFloat(nombre2) !== 0 ? parseFloat(nombre1) / parseFloat(nombre2) : "Erreur";
        }
        ecran.textContent = resultat; 

        nombre1 = resultat.toString();
        nombre2 = "";
        operation = "";
      } 
      return; 
    }

    if (["+", "-", "x", "/"].includes(valeurBouton)) {
      if (nombre1) {
        operation = valeurBouton;
        ecran.textContent = nombre1 + " " + operateur + " " + nombre2 + " = " + resultat;
      }
      return;
    }

    if (!operation) {
      nombre1 += valeurBouton;
      ecran.textContent = nombre1;
    } else {
      nombre2 += valeurBouton;
      ecran.textContent = `${nombre1} ${operation} ${nombre2}`;
    }
  });
});
