var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("degradado")

function setGradient(){
body.style.background = 
"linear-gradient(to right, "
+ color1.value
+","
+color2.value
+")";
css.textContent + body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
   
function isUservalid(bool) {
    return bool;
}
var answer = isUservalid(true) ? "puedes entrar" : "acceso denegado";

function condition() {
    if (isUservalid(true)) {
        return "puedes entrar";
    }else{
        return"acceso denegado";
    }
}
var answer2 = condition();


function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
          
          whatHappens = "te encuentras con un monstruo";
          break;
        case "back":
            whatHappens = "llrgastes a casa";
            break;
        case "right":
                whatHappens = "has encontrado un rio";
            break;
        case "left":
             whatHappens = "te encuentras con un troll";
            break;
            default:
                whatHappens = "por favor ingerse una direccion valida";
        }
        return whatHappens;
}


const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
 }


