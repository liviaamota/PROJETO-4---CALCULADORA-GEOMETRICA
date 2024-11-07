// funçoes
function areaDT(base,altura) {
    return base*altura/2 
}
function areaDR(base,altura){
    return base*altura 
}
function areaDQ(lado) {
    return lado*lado
}
function areaDC(raio){
   return 3,14*(raio*raio) 
}    

function areaDTR(baseMaior,baseMenor,altura) {
    return (baseMaior+baseMenor)*altura/2
}  
// ==================
menu =''
do {
menu = parseInt(prompt(`Escolha o metodo de calculo
    1- area do triângulo 
    2- area do retângulo 
    3- area do quadrado 
    4- area do trapézio
    5 - area do círculo 
    6 - sair  `))
switch(menu){
    case'1':
        const base = parseFloat(prompt(`Coloque dois valores EX:3,4`))
        const height = parseFloat(prompt('Coloque um valor'))
        alert(`Essa é a area do triangulo ${areaDT(base, height)}`)
break
    case'2':
        const base1 = parseFloat(prompt(`Coloque um valor`))
        const height2 =parseFloat(prompt(`Colque outro valor`))
    alert(`essa é a area do retangulo ${areaDR(base1,height2)}`)
break
    case'3':
        const way = parseFloat(prompt('Coloque um valor'))
    alert(`essa é a area do quadrado ${areaDQ(lado)}`)
break
    case'4':
        const base3 = parseFloat(prompt('Digite um valor'))
        const base4 = parseFloat(prompt('Digite um valor'))
        const height3 = parseFloat(prompt('Digite um valor'))
    alert (`essa é a area do trapezio ${areaDTR(base3,base4,height3)}`)
break
    case'5':
    const area = parseFloat(prompt(`Coloque um valor`))
    alert(`essa é a area do circulo ${areaDC(area)}`)
break
    default:
    alert("Valor invalido")
}
}
while( menu ==! '6')