import EmprestimoModel from "../../emprestimo/models/index.js";

// CONTROLLERS - emprestimo

class EmprestimoController {
  static async criar(id_emprestimo, id_livro, id_usuario, status, data_emprestimo, data_devolucao) {
    try {
      if (!id_emprestimo || !id_livro || !id_usuario || !status || !data_emprestimo || !data_devolucao) {
          return console.error('Todos os campos devem ser preenchidos!');
      }
      const emprestimo = await EmprestimoModel.criar(id_emprestimo, id_livro, id_usuario, status, data_emprestimo, data_devolucao);
      console.log('Emprestimo criado com sucesso!');
      return emprestimo;
    } catch (error) {
      console.log('Erro ao criar emprestimo:', error.message);
    }
  }

  static async listarPorLivroOuUsuario(id_livro,id_usuario){
    try {
      const emprestimos = await EmprestimoModel.listarPorLivroOuUsuario(id_livro,id_usuario); // Passa os dois parâmetros
      if (!emprestimos || emprestimos.length === 0) {
          console.log('Nenhum empréstimo encontrado!');
          return [];
      }
      console.log('Empréstimos encontrados:', emprestimos);
      return emprestimos;
  } catch (error) {
      console.error('Erro ao buscar livro:', error);
      throw error;
    }
  }
  static async filtrar(status) {
    try {
      const emprestimo = await EmprestimoModel.filtrar(status);
      if (emprestimo.length === 0){
          return console.error('Emprestimo não encontrado!');
      }
      return emprestimo;
    } catch (error) {
      console.log('Erro ao listar emprestimo:', error.message);
    }
  }
  static async totalEmprestimo(){
    try {
      const total = await EmprestimoModel.totalEmprestimo();
      if (total.length === 0) {
        return console.error('Não há registros de empréstimo!');
      }
      return total;
    } catch (error) {
      console.log('Erro ao buscar registros:',error.message);
    }
  }
  static async listarTodos() {
    try {
      const emprestimos = await EmprestimoModel.listarTodos();
      console.log('Listagem de emprestimos:');
      return emprestimos;
    } catch (error) {
      console.log('Erro ao listar emprestimos:', error.message);
    }
  }
  static async atualizarStatus(id_emprestimo, status){
    try {
      if (!id_emprestimo || !status){
        return console.error('Todos os campos devem ser preenchidos!');
    }
      const emprestimo = await EmprestimoModel.atualizarStatus(id_emprestimo, status);
    console.log('Empréstimo atualizado com sucesso!');
    return emprestimo;
    
    } catch (error) {
      console.log('Erro ao atualizar empréstimo:', error.message);
    }
  }

  static async deletarEmprestimo(id_emprestimo) {
    try {
      await EmprestimoModel.deletarEmprestimo(id_emprestimo);
      console.log('Empréstimo excluído com sucesso!');
    } catch (error) {
      console.log('Erro ao excluir empréstimo:', error.message);
    }
  }
}

export default EmprestimoController;
