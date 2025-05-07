import CriarTabela from '../ATIVIDADE/src/config/criar_tabela.js'
import prompt from 'prompt-sync';
import UsuarioView from '../ATIVIDADE/src/modules/usuario/views/index.js';
import LivroView from '../ATIVIDADE/src/modules/livro/views/index.js'
const input = prompt();

async function criarTabelas() {
    try {
        await CriarTabela.usuario();
        await CriarTabela.livro();
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
            1 - Gerenciar Usuários
            2 - Gerenciar Livros
            3 - Gerenciar Empréstimos
            0 - Sair`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await menuUsuario();
                break;
            case '2':
                await menuLivro();
                break;
            case '3':
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuUsuario() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Usuário ---
                1 - Criar usuário
                2 - Buscar usuário
                3 - Atualizar dados
                4 - Excluir usuário
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await UsuarioView.criar();
                break;
            case '2':
                await UsuarioView.buscarPorMatricula();
                break;
            case '3':
                await UsuarioView.atualizar()
                break;
            case '4':
                await UsuarioView.excluirUsuario();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}

async function menuLivro() {
    let opcao = '';
    while (opcao !== '0') {
        console.log(`\n--- Menu Livro ---
                1 - Criar livro
                2 - Buscar livro
                3 - Atualizar livro
                4 - Excluir livro
                0 - Voltar`);
        opcao = input('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                await LivroView.criar();
                break;
            case '2':
                await LivroView.buscarPorTituloOuAutor();
                break;
            case '3':
                await LivroView.atualizar()
                break;
            case '4':
                await LivroView.excluirLivro();
                break;
            case '0':
                return;
            default:
                console.log('Opção inválida!');
        }
    }
}
menu();
