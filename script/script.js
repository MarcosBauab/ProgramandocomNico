var p = document.querySelector(".resultado")
var p2 = document.querySelector(".resultado2")
var container = document.querySelector(".container-calculadoras")

document.addEventListener("keydown", teclaPressionada)
function teclaPressionada(e) {
    /*for(var i = 0; i < 10; i++){
        if(e.code == `Numpad${i}`){
            p.value = `${i}`
            p2.value += `${i}`

        }
        if(e.code == `Digit${i}`){
            p2.value += `${i}`
            p.value += `${i}`
        }
    } */


   switch (e.code) {
        /*case "NumpadMultiply":
            p.value += `*`
            p2.value += `*`

            break;
        case "NumpadSubtract":
            p.value += `-`
            p2.value += `-`

            break;
        case "NumpadDivide":
            p.value += `/`
            p2.value += `/`

            break;
        
        case "NumpadAdd":
            p.value += `+`
            p2.value += `+`

            break;
        
        case "NumpadComma":
            p.value += `.`
            p2.value += `.`

            break;
        
        case "NumpadDecimal":
            p.value += `.`
            p2.value += `.`

            break;
        
        case "Digitc":
            p.value += ``
            p2.value += ``

            break;
        case "DigitC":
            p.value += ``
            p2.value += ``

            break;
            
        case "NumpadAdd":
            p.value += `+`
            p2.value += `+`

            break;
        case "NumpadComma":
            p.value += `.`
            p2.value += `.`

            break;
        case "NumpadDecimal":
            p.value += `.`
            p2.value += `.`

            break;
        case "KeyC":
            p.value = ``
            p2.value = ``

            break;
        case "Backspace":
            var myStr = p.value
            myStr = myStr.slice(0, -1);
            p.value = myStr
            p2.value = myStr

            break;*/
        case "Enter":

            
            if(container.className == "container-calculadoras direita"){
                calcularc()
            } else {
                calcular()
            }
            
            break;
        
        case "ArrowRight":
            if(container.className == "container-calculadoras esquerda"){
                animarEsquerda()
            }
            break;

        case "ArrowLeft":
            if(container.className == "container-calculadoras direita"){
                animarDireita()
            }
            break;

        default:
            break;
    }  
}

function calcular(){
    var conta = eval(p.value)
    p.value = conta
}

function escrever(num){
    p.value += num

}

function escreverc(num){
    p2.value += num
}

function apagar(){
    texto = p.value.slice(0,-1)
    texto2 = p2.value.slice(0,-1)
    p.value = texto
    p2.value = texto2

}

function igual(){
    if (p.value == ''){
        p.value = '0'
    }
    else{
    calcular()
}}

function igualc(){
    calcularc()
}

function c(){
    p.value = ""
    p2.value = ""

}

/*Animação*/
function animarEsquerda(){
    /*var pos = 0
    var objeto = document.querySelector(".container-calculadoras")
    var id = setInterval(frame, 1);
    function frame(){
        if(pos == -102){
            clearInterval(id)
        } else{
            pos--
            objeto.style.left = pos + "%"
        }
    }*/
    if(container.className == "container-calculadoras esquerda"){
        container.classList.remove("esquerda")
    }
    container.classList.add("direita")
    container.animate([
        // keyframes
        { transform: 'translateX(0px)' }, 
        { transform: 'translateX(-102%)' }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1,
        easing: 'cubic-bezier(.59,.12,.35,1.3)',
        fill: 'forwards'
      });
      
}
function animarDireita(){
    /*var pos = -102
    var objeto = document.querySelector(".container-calculadoras")
    var id = setInterval(frame, 1);
    function frame(){
        if(pos == 0){
            clearInterval(id)
        } else{
            pos++
            objeto.style.left = pos + "%"
        }
    }*/
    if(container.className == "container-calculadoras direita"){
        container.classList.remove("direita")
    }
    container.classList.add("esquerda")
    document.querySelector(".container-calculadoras").animate([
        // keyframes
        { transform: 'translateX(-102%)' }, 
        { transform: 'translateX(0%)' }
      ], { 
        // timing options
        duration: 1000,
        iterations: 1,
        easing: 'cubic-bezier(.59,.12,.35,1.3)',
        fill: 'forwards'
      });
}

/*Científica*/
function e(){
    p2.value += Math.exp(1)
}

function pi(){
    a = Math.PI
    p2.value += a
}

function potencia(){
    p2.value += "^"
}

function log(){
    p2.value = 'log'
}

function ln(){
    p2.value = 'ln'
}

function seno(){
    a = p2.value
    p2.value ="sin"
}

function cos(){
    a = p2.value
    p2.value ="cos"
}
function tan(){
    a = p2.value
    p2.value ="tan"
}
function calcularc(){
    a = p2.value

    if (p2.value[0] == 's')
    {
        let c = a.slice(3)*Math.PI/180
        if (Math.sin(c) < 0.0000001){
            p2.value = '0'
        }else{
        p2.value = Math.sin(c)
    }}

    else if (p2.value[0] == 'c')
    {
        let c = a.slice(3)*Math.PI/180
        if (Math.cos(c) < 0.0000001){
            p2.value = '0'
        }else{
        p2.value = Math.cos(c)
    }}

    else if (p2.value[0] == 't')
    {
        let c = a.slice(3)*Math.PI/180
        if (Math.tan(c) < 0.0000001){
            p2.value = '0'
        }else{
        p2.value = Math.tan(c)
    }}

    else if (p2.value[1] == 'o'){
        b = a.slice(3)
        p2.value = Math.log10(b)
    }

    else if (p2.value[1] == 'n'){
        b = a.slice(2)
        if (b == Math.exp(1)){
            p2.value = '1'
        }
        else{
        p2.value = Math.log(b)}
    }

    else{
    let conts = p2.value.replace("^","**")
    var conta = eval(conts)
    p2.value = conta


}}
/*function random(){
    p2.value = Math.floor(Math.random()*100)
}*/

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
    //p.value += `${e.code}`
    for(var i = 0; i < 10; i++){
        if(e.code == `Numpad${i}`){
            p.value += `${i}`
        }
        if(e.code == `Digit${i}`){
            p.value += `${i}`
        }
    } 
    switch (e.code) {
        case "NumpadMultiply":
            p.value += `*`
            break;
        case "Backspace":
            p.value -= `*`
            break;
        
        
        default:
            break;
    }  
    
}*/
