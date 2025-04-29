// CONTROLLERS - Professor
import ProfessorModel from '../models/index.js';

class ProfessorController {
    static async criar(nome, matricula, cod_curso) {
        try {
            if (!nome || !matricula || !cod_curso) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const professor = await ProfessorModel.criar(nome, matricula, cod_curso);
            console.log('Professor criado com sucesso!');
            return professor;
        } catch (error) {
            console.log('Erro ao criar professor:', error.message);
        }
    }

    static async editar(nome, matricula, cod_curso) {
        try {
            if (!nome || !matricula || !cod_curso) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const professor = await ProfessorModel.atualizarProfessor(nome, matricula, cod_curso);
            if (professor.length === 0){
                return console.error('Professor não encontrado!');
            }
            console.log('Professor atualizado com sucesso!');
            return professor;
        } catch (error) {
            console.log('Erro ao editar professor:', error.message);
        }
    }

    static async listarTodos() {
        try {
            const professores = await ProfessorModel.listarTodos();
            console.log('Listagem de professores:');
            return professores;
        } catch (error) {
            console.log('Erro ao listar professores:', error.message);
        }
    }

    static async listarPorMatricula(matricula) {
        try {
            const professor = await ProfessorModel.listarPorMatricula(matricula);
            if (professor.length === 0) {
                return console.error('Professor não encontrado!');
            }
            return professor;
        } catch (error) {
            console.log('Erro ao listar professor:', error.message);
        }
    }

    static async deletarProfessor(matricula) {
        try {
            const professor = await ProfessorModel.listarPorMatricula(matricula);
            if (professor.length === 0) {
                return console.error('Professor não encontrado!');
            }
            await ProfessorModel.deletarProfessor(matricula);
            console.log('Professor excluído com sucesso!');
        } catch (error) {
            console.log('Erro ao excluir professor:', error.message);
        }
    }

    static async totalProfessor() {
        try {
            const total = await ProfessorModel.totalProfessor();
            if (total.length === 0) {
                return console.error('Não há professores na contagem!');
            }
            console.log(`Total de professores: ${total[0].total}`);
            return total[0].total;
        } catch (error) {
            console.error('Erro ao contar todos os alunos:', error.message);
        }
    }

}

export default ProfessorController;