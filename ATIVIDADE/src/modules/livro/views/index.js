import LivroController from '../../livro/controllers/index.js'
import input from 'prompt-sync';
const prompt = input();

class LivroView{
    static async criar(){
        const id_livro = prompt("Digite o id do livro: ");
        const titulo = prompt("Digite o titulo do livro: ");
        const autor = prompt("Digite a autor do livro: ");
        const ano_publicacao = prompt("Digite o ano de publicação do livro: ");
        const livro = await LivroController.criar(
            id_livro,
            titulo,
            autor,
            ano_publicacao,
        );
        //console.table(livro);
    }
    static async buscarPorTituloOuAutor() {
        const titulo = prompt("Digite o titulo do livro: ");
        const autor = prompt("Digite o autor do livro: ");
        const livro = await LivroController.buscarPorTituloOuAutor(titulo,autor);
        console.table(livro);
    }
    static async atualizar() {
        const id_livro = prompt("Digite o id do livro: ");
        const titulo = prompt("Digite o titulo do livro: ");
        const autor = prompt("Digite a autor do livro: ");
        const ano_publicacao = prompt("Digite o ano de publicação do livro: ");
        const livro = await LivroController.atualizar(
            id_livro,
            titulo,
            autor,
            ano_publicacao,
        );
        console.table(livro);
    }
    static async excluirLivro(){
        const cod = prompt("Digite o id do livro a ser excuído: ")
        await LivroController.excluirLivro(cod);
        console.log(`livro com id ${cod} foi deletado.`);
    }
}

export default LivroView