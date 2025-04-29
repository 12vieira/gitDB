import AlunoModel from "../models/index.js";

class AlunoController {
    static async criar(nome, email, matricula, telefone, cod_turma) {
        try {
            if (!nome || !email || !matricula || !telefone || !cod_turma) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const aluno = await AlunoModel.criar(nome, email, matricula, telefone, cod_turma);
            console.log('Aluno criado com sucesso!');
            return aluno;
        } catch (error) {
            console.error('Erro ao criar aluno:', error.message);
        }
    }

    static async editar(nome, email, matricula, telefone, cod_turma) {
        try {
            if (!nome || !email || !matricula || !telefone || !cod_turma) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const aluno = await AlunoModel.atualizarAluno(nome, email, matricula, telefone, cod_turma);
            if (aluno.length === 0) {
                return console.error('Aluno não encontrado!');
            }
            console.log('Aluno atualizado com sucesso!');
            return aluno;
        } catch (error) {
            console.error('Erro ao atualizar o aluno:', error.message);
        }
    }

    static async deletarAluno(email) {
        try {
            const aluno = await AlunoModel.listarPorEmail(email);
            if (aluno.length === 0) {
                return console.error('Aluno não encontrado!');
            }
            await AlunoModel.deletarAluno(email);
            console.log('Aluno excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir o aluno:', error.message);
        }
    }

    static async deletarTodos() {
        try {
            await AlunoModel.deletarTodos();
            console.log('Todos os alunos foram excluídos com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir todos os alunos:', error.message);
        }
    }

    static async listarTodos() {
        try {
            const alunos = await AlunoModel.listarTodos();
            if (alunos.length === 0) {
                return console.log('Nenhum aluno encontrado!');
            }
            console.log('Listagem de alunos:');
            return alunos;
        } catch (error) {
            console.error('Erro ao listar todos os alunos:', error.message);
        }
    }

    static async listarPorEmail(email) {
        try {
            const aluno = await AlunoModel.listarPorEmail(email);
            if (aluno.length === 0) {
                return console.error('Aluno não encontrado!');
            }
            console.log('Aluno encontrado:');
            return aluno;
        } catch (error) {
            console.error('Erro ao listar aluno por email:', error.message);
        }
    }

    static async totalAlunos() {
        try {
            const total = await AlunoModel.totalAlunos();
            if (total.length === 0) {
                return console.error('Não há alunos na contagem!');
            }
            console.log(`Total de alunos: ${total[0].total}`);
            return total[0].total;
        } catch (error) {
            console.error('Erro ao contar todos os alunos:', error.message);
        }
    }

}

export default AlunoController;