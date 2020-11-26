var historico = document.querySelector(".historico")
document.addEventListener("keydown", teclaPressionad)
function teclaPressionad(e){
    switch (e.code) {
        case "Enter":
            historico.style.opacity = "1"
            historico.innerHTML += p.value +"<br>"
            break;
    }
}
