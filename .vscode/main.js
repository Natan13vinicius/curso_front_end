// Array de objetos com os alunos e suas respectivas notas
const alunos = [
  { nome: "Alice", nota: 7 },
  { nome: "Bruno", nota: 5 },
  { nome: "Carla", nota: 9 },
  { nome: "Daniel", nota: 6 },
  { nome: "Elisa", nota: 4 },
];

// Função que filtra e retorna apenas os alunos com nota >= 6
function alunosAprovados(alunosArray) {
  return alunosArray.filter((aluno) => aluno.nota >= 6);
}

// Resultado no console
const aprovados = alunosAprovados(alunos);
console.log("Alunos aprovados:", aprovados);
