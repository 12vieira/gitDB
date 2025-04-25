import CriarTabela from './src/config/criar_tabela.js';
import prompt from 'prompt-sync';
import AlunoView from './src/modules/aluno/views/index.js';
import CursoView from './src/modules/curso/views/index.js';
import ProfessorView from './src/modules/professor/views/index.js';

const input = prompt();

async function criarTabelas() {
    try {
        await CriarTabela.curso();
        await CriarTabela.aluno();
        await CriarTabela.professor();
        console.log('Tabelas criadas com sucesso!');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
}

async function menu() {
    await criarTabelas();

    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n===== MENU PRINCIPAL =====
            1 - Gerenciar Alunos
            2 - Gerenciar Professores
            3 - Gerenciar Cursos
            0 - Sair`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await menuAluno();
                break;
            case '2':
                await menuProfessor();
                break;
            case '3':
                await menuCurso();
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuAluno() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Aluno ---
                1 - Criar aluno
                2 - Listar todos
                3 - Buscar por email
                4 - Editar aluno
                5 - Deletar aluno
                6 - Deletar todos
                7 - Total de alunos
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await AlunoView.criar();
                break;
            case '2':
                await AlunoView.listarTodos();
                break;
            case '3':
                await AlunoView.listarPorEmail();
                break;
            case '4':
                await AlunoView.editarAluno();
                break;
            case '5':
                await AlunoView.deletarAluno();
                break;
            case '6':
                await AlunoView.deletarTodos();
                break;
            case '7':
                await AlunoView.totalAlunos();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuProfessor() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Professor ---
                1 - Criar professor
                2 - Listar todos
                3 - Buscar por matrícula
                4 - Editar professor
                5 - Deletar professor
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await ProfessorView.criar();
                break;
            case '2':
                await ProfessorView.listarTodos();
                break;
            case '3':
                await ProfessorView.listarPorMatricula();
                break;
            case '4':
                await ProfessorView.editarProfessor();
                break;
            case '5':
                await ProfessorView.deletarProfessor();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuCurso() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Curso ---
                1 - Criar curso
                2 - Listar todos
                3 - Buscar por código
                4 - Editar curso
                5 - Deletar curso
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await CursoView.criar();
                break;
            case '2':
                await CursoView.listarTodos();
                break;
            case '3':
                await CursoView.listarPorCodigo();
                break;
            case '4':
                await CursoView.editarCurso();
                break;
            case '5':
                await CursoView.deletarCurso();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

menu();