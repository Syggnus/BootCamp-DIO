
function menssagem(num1,num2){
    const primeiraMenssagem = criarPrimeiraMenssagem(num1,num2);
    const segundaMenssagem = criarSegundaMenssagem(num1,num2);
};

function criarPrimeiraMenssagem(num1,num2) {
    const comparação = "";
    num1 !== num2 ? comparação = "Não" : `Os números ${num1} e ${num2} ${comparação} são iguais.`;
};

function criarSegundaMenssagem(num1,num2) {
    let conferirValor = "";
    const soma = num1 + num2;

   if (soma < 10){
    conferirValor = "que é menor do que 10 e menor do que 20";
   } else if ( soma >= 10 && soma < 20  ){
    conferirValor = "que menor do que 20.";
   } else if ( soma >20  ) {
    conferirValor = "que maior do que 20.";
   }

   return `Sua soma é ${soma},${conferirValor}`

};

//console.log(menssagem(num1, num2));


