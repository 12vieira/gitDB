import AlunoController from "../controllers/index.js";
import input from 'prompt-sync';

const prompt = input();
class AlunoView {
  static async criar() {
    const nome = prompt("Digite o nome do aluno: ");
    const email = prompt("Digite o email do aluno: ");
    const matricula = prompt("Digite a matrícula do aluno: ");
    const telefone = prompt("Digite o telefone do aluno: ");
    const cod_turma = prompt("Digite o código da turma do aluno: ");

    const aluno = await AlunoController.criar(
      nome,
      email,
      matricula,
      telefone,
      cod_turma
    );
    console.table(aluno);
  }

  static async editarAluno() {
    const nome = prompt("Digite o novo nome do aluno: ");
    const email = prompt("Digite o email do aluno: ");
    const matricula = prompt("Digite a nova matrícula do aluno: ");
    const telefone = prompt("Digite o novo telefone do aluno: ");
    const cod_turma = prompt("Digite o novo código da turma do aluno: ");

    const aluno = await AlunoController.editar(
      nome,
      email,
      matricula,
      telefone,
      cod_turma
    );
    console.table(aluno);
  }

  static async listarTodos() {
    const alunos = await AlunoController.listarTodos();
    console.table(alunos);
  }

  static async listarPorEmail() {
    const email = prompt("Digite o email do aluno: ");
    const aluno = await AlunoController.listarPorEmail(email);
    console.table(aluno);
  }

  static async deletarTodos() {
    await AlunoController.deletarTodos();
    console.log("Todos os alunos foram deletados.");
  }

  static async deletarAluno() {
    const email = prompt("Digite o email do aluno a ser deletado: ");
    await AlunoController.deletarAluno(email);
    console.log(`Aluno com email ${email} foi deletado.`);
  }

  static async totalAlunos() {
    const total = await AlunoController.totalAlunos();
    console.table(total);
  }
}

export default AlunoView;