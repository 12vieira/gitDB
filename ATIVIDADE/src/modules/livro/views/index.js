import LivroController from '../../livro/controllers/index.js'
import input from 'prompt-sync';
const prompt = input();

class LivroView{
    static async criar(){
        const titulo = prompt("Digite o titulo do livro: ");
        const autor = prompt("Digite a autor do livro: ");
        const ano_publicacao = prompt("Digite o ano de publicação do livro: ");
        const livro = await LivroController.criar(
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
        const titulo = prompt("Digite o titulo do livro: ");
        const autor = prompt("Digite a autor do livro: ");
        const ano_publicacao = prompt("Digite o ano de publicação do livro: ");
        const livro = await LivroController.atualizar(
            titulo,
            autor,
            ano_publicacao,
        );
        console.table(livro);
    }
    static async excluirLivro(){
        const autor = prompt("Digite o titulo do livro a ser excuído: ")
        await LivroController.excluirLivro(titulo);
        console.log(`livro com autor ${titulo} foi deletado.`);
    }
}

export default LivroView