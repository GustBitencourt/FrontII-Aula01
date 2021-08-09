/* A secretaria de uma escola contratou a sua empresa para desenvolver sua plataforma de
gestão de alunos, sendo uma dessas partes a criação de um sistema que calcule as notas
obtidas ao longo do semestre, Você e seu grupo fazem parte da equipe responsável por
implementar esta funcionalidade no sistema.
Para isso, crie um script que permita adicionar uma sequência de números (um array de
números) consecutivamente para receber as notas dos 4 bimestres. Após isso, crie uma
estrutura na qual todos os números do array sejam somados sequencialmente: o primeiro
número seja somado ao segundo e o resultado seja impresso no console. Então,
temos que pegar esse resultado e adicionar o terceiro número a ele, e assim por
diante, até terminarmos de percorrer o array. */

const nota = [5, 6, 7, 8];
console.log(nota);
let primeiroBimestre = nota[0];
let segundoBimestre = primeiroBimestre + nota[1];
let terceiroBimestre = segundoBimestre + nota[2];
let quartoBimestre = terceiroBimestre + nota[3];
let mediaFinal = quartoBimestre / 4;

let chamadaDeNotas = () => {
    console.log(`Nota do primeiro bimestre é de ${primeiroBimestre}`);
    console.log(`Nota do segundo bimestre é de ${segundoBimestre}`);
    console.log(`Nota do terceiro bimestre é de ${terceiroBimestre}`);
    console.log(`Nota do quarto bimestre é de ${quartoBimestre}`);
}

chamadaDeNotas();

/* Terminada esta etapa é hora de preparar o código para ficar mais amigável ao usuário final,
com mensagens que informem a nota do aluno e sua condição:
1. Utilizando a função console.log informe a nota que o aluno teve em cada um dos
bimestres e por fim sua nota final. Por exemplo: “Parabéns pela conclusão do primeiro
bimestre. Sua nota foi: 8.”;
2. Após mostrar a nota final, crie uma estrutura de decisão que informe se o aluno foi
aprovado ou não, sendo a média da escola 7. */

let aprovacao = () => {
    if(mediaFinal >=6) {
        console.log(`Aluno está aprovado com a media de ${mediaFinal}`)
    } else {
        console.log(`Aluno está reprovado com a media de ${mediaFinal}`)
    }
}

aprovacao();


/* Solução professor */
let arraySoma = [4,6,7,3] 
function somarElementos(arraySoma) {
    let soma = 0;
    arraySoma.forEach(n => {
      soma = soma + n
      console.log(soma);
    });
  }
   
  
  somarElementos(arraySoma);
  

