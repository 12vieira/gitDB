
// CONTROLLERS - Curso
import CursoModel from '../models/index.js';

class CursoController {
  static async criar(cod_curso, nome_curso) {
    try {
      if (!cod_curso || !nome_curso) {
          return console.error('Todos os campos devem ser preenchidos!');
      }
      const curso = await CursoModel.criar(cod_curso, nome_curso);
      console.log('Curso criado com sucesso!');
      return curso;
    } catch (error) {
      console.log('Erro ao criar curso:', error.message);
    }
  }

  static async editar(cod_curso, nome_curso) {
    try {
      if (!cod_curso || !nome_curso){
          return console.error('Todos os campos devem ser preenchidos!');
      }
      const busca = await CursoModel.listarPorCodigo(cod_curso);
      if (busca.length === 0) {
          return console.error('Curso não encontrado!');
      }
      const curso = await CursoModel.atualizarCurso(cod_curso, nome_curso)
      console.log('Curso atualizado com sucesso!');
      return curso;
    } catch (error) {
      console.log('Erro ao editar curso:', error.message);
    }
  }

  static async listarTodos() {
    try {
      const cursos = await CursoModel.listarTodos();
      console.log('Listagem de cursos:');
      return cursos;
    } catch (error) {
      console.log('Erro ao listar cursos:', error.message);
    }
  }

  static async listarPorCodigo(cod_curso) {
    try {
      const curso = await CursoModel.listarPorCodigo(cod_curso);
      if (curso.length === 0){
          return console.error('Curso não encontrado!');
      }
      return curso;
    } catch (error) {
      console.log('Erro ao listar curso:', error.message);
    }
  }

  static async deletarCurso(cod_curso) {
    try {
      const curso = await CursoModel.listarPorCodigo(cod_curso);
      if (curso.length === 0) {
          return console.error('Curso não encontrado!');
      }
      await CursoModel.deletarCurso(cod_curso);
      console.log('Curso excluído com sucesso!');
    } catch (error) {
      console.log('Erro ao excluir curso:', error.message);
    }
  }

  static async totalAlunosPorCurso(cod_curso){
    try {
      const total = await CursoModel.totalAlunosPorCurso(cod_curso);
      if (total.length === 0) {
        return console.error('Não há alunos no curso');
      }
      console.log(`Total de alunos: ${total[0].total}`);
            return total[0].total;
    } catch (error) {
      console.log('Erro ao buscar o dado:',error.message);
    }
  }
  
  static async listarAlunosPorCurso(cod_curso) {
    try {
      const curso = await CursoModel.listarAlunosPorCurso(cod_curso);
      if (curso.length === 0){
          return console.error('Curso não encontrado!');
      }
      return curso;
    } catch (error) {
      console.log('Erro ao listar alunos por curso:', error.message);
    }
  }

  static async listarProfessoresPorCurso(cod_curso) {
    try {
      const curso = await CursoModel.listarProfessoresPorCurso(cod_curso);
      if (curso.length === 0){
          return console.error('Curso não encontrado!');
      }
      return curso;
    } catch (error) {
      console.log('Erro ao listar alunos por curso:', error.message);
    }
  }
}

export default CursoController;
