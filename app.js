document.querySelector(#p).textContent= "index.html";
let frases = ["F1", "F2", "F3"];
function geradorMensagem(){
    if(frases.length == 0){
        frases = [...frasesCopiada];
    }
let indiceGerado = Math.floor(Math.random()*(frases.length));
let fraseGerada = frases[indiceGerado];
console.log(fraseGerada)
}
geradorMensagem();
let frasesCopiada = [...frases];