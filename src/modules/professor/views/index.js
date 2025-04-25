// VIEWS - Professor
import ProfessorController from '../controllers/index.js';
import prompt from 'prompt-sync';
const input = prompt();

class ProfessorView {
  static async criar() {
    const nome = input('Digite o nome do professor: ');
    const matricula = input('Digite a matrícula do professor: ');
    const cod_curso = input('Digite o código do curso: ');
    const professor = await ProfessorController.criar(nome, matricula, cod_curso);
    console.table(professor);
  }
  static async editarProfessor() {
    const nome = input('Digite o nome do professor: ');
    const matricula = input('Digite a matrícula do professor: ');
    const cod_curso = input('Digite o código do curso: ');
    const professor = await ProfessorController.editar(nome, matricula, cod_curso);
    console.table(professor);
  }
  static async listarTodos() {
    const professores = await ProfessorController.listarTodos();
    console.table(professores);
  }
  static async listarPorMatricula() {
    const matricula = input('Digite a matrícula do professor: ');
    const professor = await ProfessorController.listarPorMatricula(matricula);
    console.table(professor);
  }
  static async deletarProfessor() {
    const matricula = input('Digite a matrícula do professor: ');
    await ProfessorController.deletarProfessor(matricula);
  }
}

export default ProfessorView;