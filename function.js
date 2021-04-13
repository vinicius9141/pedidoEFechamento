
var count_click = 0;
var count_click1 = 0;
var count_click2 = 0;
var count_click3 = 0;

function adicionar(){
    count_click += 1;
    console.log(count_click)
}
function adicionar1(){
    count_click1 += 1;
    console.log(count_click1)
}
function adicionar2(){
    count_click2 += 1;
    console.log(count_click2)
}
function adicionar3(){
    count_click3 += 1;
    console.log(count_click3)
}

function remover(){
    count_click -= 1;
    console.log(count_click)
}



function remover1(){
    count_click1 -= 1;
    console.log(count_click1)
}



function remover2(){
    count_click2 -= 1;
    console.log(count_click2)
}


function remover3(){
    count_click3 -= 1;
    console.log(count_click3)
}

function total(){
    var valorNoCampo = document.getElementById('preco1').innerText
    var valorNocampo1 = document.getElementById('preco2').innerText
    var valorNocampo2 = document.getElementById('preco3').innerText
    var valorNocampo3 = document.getElementById('preco4').innerText

    var valorConvertido = parseFloat(valorNoCampo)
    var valorConvertido1 = parseFloat(valorNocampo1)
    var valorConvertido2= parseFloat(valorNocampo2)
    var valorConvertido3 = parseFloat(valorNocampo3)
  



    var soma = valorConvertido*count_click + valorConvertido1*count_click1 + valorConvertido2*count_click2 + valorConvertido3*count_click3

    var total = soma;
    console.log(total)

//    alert(count_click + x)
}