import EmprestimoController from '../../emprestimo/controllers/index.js';

// VIEWS - emprestimo
import prompt from 'prompt-sync';
const input = prompt();

class EmprestimoView {
  static async criar() {
    const id_emprestimo = input('Digite o id do empréstimo: ');
    const id_livro = input('Digite o id do livro: ');
    const id_usuario = input('Digite o id do usuário: ');
    const status = "ativo";
    const data_emprestimo = input('Digite a data do empréstimo [YYYY-MM-DD]: ');
    const data_devolucao = input('Digite a data de devolução [YYYY-MM-DD]: ');
    const emprestimo = await EmprestimoController.criar(id_emprestimo, id_livro, id_usuario, status, data_emprestimo, data_devolucao);
    console.table(emprestimo);
  }
  static async listarPorLivroOuUsuario() {
    const id_livro = input('Digite o id do livro: ');
    const id_usuario = input('Digite o id do usuário: ');
    const emprestimo = await EmprestimoController.listarPorLivroOuUsuario(id_livro,id_usuario);
    console.table(emprestimo);
  }
  static async filtrar(){
    const status = input('Digite o status do empréstimo: ');
    const filtrarEmprestimo = await EmprestimoController.filtrar(status);
    console.table(filtrarEmprestimo)
  }
  static async totalEmprestimo() {
    const total = await EmprestimoController.totalEmprestimo();
    console.table(total);
  }
  static async listarTodos() {
    const emprestimos = await EmprestimoController.listarTodos();
    console.table(emprestimos);
  }
  static async atualizarStatus() {
    const id_emprestimo = input('Digite o id do emprestimo: ');
    const status = input('Digite o novo status do empréstimo [devolvido ou atrasado]: ');
    const emprestimo = await EmprestimoController.atualizarStatus(id_emprestimo, status);
    console.table(emprestimo);
  }
  static async deletarEmprestimo() {
    const id_emprestimo = input('Digite o id do empréstimo: ');
    await EmprestimoController.deletarEmprestimo(id_emprestimo);
  }
}

export default EmprestimoView;
