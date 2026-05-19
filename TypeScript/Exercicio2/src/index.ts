interface Estudante{
    nome: string;
    notas: number[]; //um vetor de numeros
}

function calcularMedia(estudante: Estudante): void{
    let soma: number = 0;

    //percorrer o array de notas
    for(let i=0; i< estudante.notas.length; i++){
        soma += estudante.notas[i];
    }

    const media: number = soma / estudante.notas.length;

    const status: string = media >= 7 ? "Aprovado" : "Reprovado";

    console.log(`Estudante: ${estudante.nome}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Status: ${status}`);
    console.log("=============================");
}

//Testando a função

const estudante1: Estudante = {
  nome: "Pedro Santos",
  notas: [8.5, 7.0, 9.0] // Média 8.16 -> Aprovado
};

const estudante2: Estudante = {
  nome: "Mariana Costa",
  notas: [5.0, 6.5, 4.0] // Média 5.16 -> Reprovado
};

calcularMedia(estudante1);
calcularMedia(estudante2);