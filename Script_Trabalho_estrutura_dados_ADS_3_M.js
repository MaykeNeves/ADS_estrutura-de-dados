let person = {}
let lista = []
let state = true
while(state){
    const readline = require('readline-sync');
    let escolha = readline.question("Entre com uma das opções abaixo: \n1. Cadastrar alunos.\n2. Relatório de Alunos em ordem crescente por Nome.\n3. Relatório de Alunos em ordem decrescente por RA.\n4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.\n5. Encerre a execução do programa.\n\nOPÇÃO: ");
    if(escolha == 1)
    {
        let name = readline.question("Nome do Aluno: ");
        let ra = parseInt(readline.question("Número do RA: "));
        let sexo = readline.question("Sexo do Aluno: ");
        let idade = readline.question("Idade do Aluno: ");
        let media = readline.question("Média do Aluno: ");
        let resultado = readline.question("Resultado do aluno: ");
        person.nome = name
        person.ra = ra
        person.idade = idade
        person.sexo = sexo
        person.media = media
        person.resultado = resultado
        lista.push(person)
        person = {}

    }
    else if(escolha == 2)
    {
        function selectionSort(lista, fnComp){
            for(let posSel=0; posSel < lista.length -1; posSel++){
                let posMenor = posSel + 1
                for(let i = posMenor +1; i< lista.length; i++){
                    if(fnComp(lista[posMenor], lista[i])) posMenor = i
                }
                if(fnComp(lista[posSel], lista[posMenor])){
                    [lista[posSel], lista[posMenor]] = [lista[posMenor], lista[posSel]]
                }
            }
        }

        selectionSort(lista, (elem1, elem2) => {
            return elem1.nome > elem2.nome
        })
        console.log(lista)
    }

    else if(escolha == 3)
    {
      function selectionSort(lista, fnComp){
        for(let posSel=0; posSel < lista.length -1; posSel++){
        let posMenor = posSel + 1
        for(let i = posMenor +1; i< lista.length; i++){
            if(fnComp(lista[posMenor], lista[i])) posMenor = i
        }
        if(fnComp(lista[posSel], lista[posMenor])){
            [lista[posSel], lista[posMenor]] = [lista[posMenor], lista[posSel]]
        }
        }
      }

      selectionSort(lista, (elem1, elem2) => {
        return elem1.ra < elem2.ra
      })
    console.log(lista)
    }

    else if(escolha == 4)
    {
      function selectionSort(lista, fnComp){
        for(let posSel=0; posSel < lista.length -1; posSel++){
        let posMenor = posSel + 1
        for(let i = posMenor +1; i< lista.length; i++){
            if(fnComp(lista[posMenor], lista[i])) posMenor = i
        }
        if(fnComp(lista[posSel], lista[posMenor])){
            [lista[posSel], lista[posMenor]] = [lista[posMenor], lista[posSel]]
        }
        }
      }

      selectionSort(lista, (elem1, elem2) => {
        return elem1.nome > elem2.nome
      })

      for (let i = 0; i < lista.length; i++)
      {
        if(lista[i].resultado == 'aprovado' || lista[i].resultado == 'aprovada' )
        {
          console.log(lista[i])
        }
      }

    }
    if(escolha == 5)
    {
      state = false
    }

}
