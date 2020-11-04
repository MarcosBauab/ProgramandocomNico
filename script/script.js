var p = document.querySelector(".resultado")
var p2 = document.querySelector(".resultado2")
document.addEventListener("keydown", teclaPressionada)
function teclaPressionada(e) {
    for(var i = 0; i < 10; i++){
        if(e.code == `Numpad${i}`){
            p.innerHTML += `${i}`
            p2.innerHTML += `${i}`

        }
        if(e.code == `Digit${i}`){
            p2.innerHTML += `${i}`
            p.innerHTML += `${i}`
        }
    } 
 
   switch (e.code) {
        case "NumpadMultiply":
            p.innerHTML += `*`
            p2.innerHTML += `*`

            break;
        case "NumpadSubtract":
            p.innerHTML += `-`
            p2.innerHTML += `-`

            break;
        case "NumpadDivide":
            p.innerHTML += `/`
            p2.innerHTML += `/`

            break;
        
        case "NumpadAdd":
            p.innerHTML += `+`
            p2.innerHTML += `+`

            break;
        
        case "NumpadComma":
            p.innerHTML += `.`
            p2.innerHTML += `.`

            break;
        
        case "NumpadDecimal":
            p.innerHTML += `.`
            p2.innerHTML += `.`

            break;
        
        case "Digitc":
            p.innerHTML += ``
            p2.innerHTML += ``

            break;
        case "DigitC":
            p.innerHTML += ``
            p2.innerHTML += ``

            break;
            
        case "NumpadAdd":
            p.innerHTML += `+`
            p2.innerHTML += `+`

            break;
        case "NumpadComma":
            p.innerHTML += `.`
            p2.innerHTML += `.`

            break;
        case "NumpadDecimal":
            p.innerHTML += `.`
            p2.innerHTML += `.`

            break;
        case "KeyC":
            p.innerHTML = ``
            p2.innerHTML = ``

            break;
        case "Backspace":
            var myStr = p.innerHTML
            myStr = myStr.slice(0, -1);
            p.innerHTML = myStr
            p2.innerHTML = myStr

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
    p2.innerHTML = conta

}

function escrever(num){
    p.innerHTML += num
    p2.innerHTML += num

}

function apagar(){
    let texto = p.innerHTML
    texto = texto.slice(0,-1)
    p.innerHTML = texto
    p2.innerHTML = texto

}

function igual(){
    if (p.innerHTML == ""){
        p.innerHTML = ""
        p2.innerHTML = ""

    }else{
        calcular()
    }
}

function c(){
    p.innerHTML = ""
    p2.innerHTML = ""

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
    document.querySelector(".container-calculadoras").animate([
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
    p2.innerHTML += Math.exp(1)
}

function pi(){
    a = Math.PI
    p2.innerHTML += a
}

function potencia(){
    p2.innerHTML += "^"
}

function seno(){
    a = p2.innerHTML
    p2.innerHTML ="sin"
}

function calcular(){
    a = p2.innerHTML
    if (p2.innerHTML[0] == 's'){
        b = a.slice(3)*Math.PI/180
        if (b == Math.PI){
            p2.innerHTML = '0'
        } else{p2.innerHTML = Math.sin(b)
    }}


    else{
    let conts = p2.innerHTML.replace("^","**")
    var conta = eval(conts)
    p2.innerHTML = conta

}}




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
