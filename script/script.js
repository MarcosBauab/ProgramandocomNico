var p = document.querySelector(".resultado")
document.addEventListener("keydown", teclaPressionada)
function teclaPressionada(e) {
    for(var i = 0; i < 10; i++){
        if(e.code == `Numpad${i}`){
            p.innerHTML += `${i}`
        }
        if(e.code == `Digit${i}`){

            p.innerHTML += `${i}`
        }
    } 
 
   switch (e.code) {
        case "NumpadMultiply":
            p.innerHTML += `*`
            break;
        case "NumpadSubtract":
            p.innerHTML += `-`
            break;
        case "NumpadDivide":
            p.innerHTML += `/`
            break;
        
        case "NumpadAdd":
            p.innerHTML += `+`
            break;
        
        case "NumpadComma":
            p.innerHTML += `.`
            break;
        
        case "NumpadDecimal":
            p.innerHTML += `.`
            break;
        
        case "Digitc":
            p.innerHTML += ``
            break;
        case "DigitC":
            p.innerHTML += ``
            break;
            
        case "NumpadAdd":
            p.innerHTML += `+`
            break;
        case "NumpadComma":
            p.innerHTML += `.`
            break;
        case "NumpadDecimal":
            p.innerHTML += `.`
            break;
        case "KeyC":
            p.innerHTML = ``
            break;
        case "Backspace":
            var myStr = p.innerHTML
            myStr = myStr.slice(0, -1);
            p.innerHTML = myStr
            break;
        case "Enter":
            calcular()
            break;
        
        
        default:
            break;
    }  
}

function calcular(){
    var conta = eval(p.innerHTML)
    p.innerHTML = conta
}

function escrever(num){

    p.innerHTML += num
}

function apagar(){
    let texto = p.innerHTML
    texto = texto.slice(0,-1)
    p.innerHTML = texto
}

function igual(){
    if (p.innerHTML == ""){
        p.innerHTML = ""
    }
    else{
    calcular()
}}

function c(){
    p.innerHTML = ""
}



/*function salvar(){
    resultado = input.value

    for (let i = 0; i < resultado.length;i++){

        if (isNaN(resultado[i])){
        operador.push(resultado[i])
        contador.push(i)
        }

        else{
        numero.push(resultado[i])
        }
  
    }

}

console.log(operador)
console.log(contador)
console.log(numero)



/*function teclaPressionada(e) {
    //p.innerHTML += `${e.code}`
    for(var i = 0; i < 10; i++){
        if(e.code == `Numpad${i}`){
            p.innerHTML += `${i}`
        }
        if(e.code == `Digit${i}`){
            p.innerHTML += `${i}`
        }
    } 
    switch (e.code) {
        case "NumpadMultiply":
            p.innerHTML += `*`
            break;
        case "Backspace":
            p.innerHTML -= `*`
            break;
        
        
        default:
            break;
    }  
    
}*/