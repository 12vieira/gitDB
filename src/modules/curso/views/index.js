
// VIEWS - Curso
import CursoController from '../controllers/index.js';
import prompt from 'prompt-sync';
const input = prompt();

class CursoView {
  static async criar() {
    const cod = input('Digite o código do curso: ');
    const nome = input('Digite o nome do curso: ');
    const curso = await CursoController.criar(cod, nome);
    console.table(curso);
  }
  static async editarCurso() {
    const cod = input('Digite o código do curso: ');
    const nome = input('Digite o novo nome do curso: ');
    const curso = await CursoController.editar(cod, nome);
    console.table(curso);
  }
  static async listarTodos() {
    const cursos = await CursoController.listarTodos();
    console.table(cursos);
  }
  static async listarPorCodigo() {
    const cod = input('Digite o código do curso: ');
    const curso = await CursoController.listarPorCodigo(cod);
    console.table(curso);
  }
  static async deletarCurso() {
    const cod = input('Digite o código do curso: ');
    await CursoController.deletarCurso(cod);
  }
}

export default CursoView;
