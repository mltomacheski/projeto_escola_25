
//8. Verificar se a soma de dois números é maior que 100.
var priNumero = Number(prompt("Digite o primeiro número para somar"));
console.log(priNumero);

var segNumero = Number(prompt("Digite o segundo número para somar"));
console.log(segNumero);

var soma = priNumero + segNumero;
if (soma>100){
    alert("A soma é maior que 100.")
    
}else
    { alert("A soma não é maior que 100.");
};

//var resultado =  Number(priNumero) + Number(segNumero);
alert("O total é : " + soma);


//18. Comparar duas strings e imprimir a maior (com base no número de
//caracteres).

var str1 =(prompt("Digite alguma coisa"));
console.log(str1);

var str2 = (prompt("Digite outra coisa "));
console.log(str2);

if (str1.length>str2.length){
    alert("A maior string é :" + str1)
    
} if (str1.length<str2.length){
    alert("A maior string é :" + str2)
}

/*28. Verificar se um caractere é uma letra maiúscula.*/

var str1 =(prompt("Digite uma letra"));
console.log(str1);

var maiuscula = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var minuscula = ("abcdefghijklmnopqrstuvwxwz");

if ( str1 === maiuscula){ 
    alert("Contém letra maiuscula");
} else {
    alert("Não contém letra maiuscula");
 }
