import LivroModel from "../../livro/models/index.js";

class LivroController{
    static async criar(titulo, autor, ano_publicacao){
        try {
            if (!titulo || !autor || !ano_publicacao) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const livro = await LivroModel.criar(titulo, autor, ano_publicacao);
            console.log('livro criado com sucesso!');
            return livro;
        } catch (error) {
            console.error('Erro ao criar livro:', error.message);
        }
    }
    // static async buscarPorTituloOuAutor(titulo, autor){
    //     try {
    //         const livros = await LivroModel.buscarPorTituloOuAutor(titulo || autor);
    //         if (livros.length === 0) {
    //             return console.log('Nenhum livro encontrado!');
    //         }
    //         console.log('Livro: ');
    //         return livros;
    //     } catch (error) {
    //         console.error('Erro ao buscar livro:', error.message);
    //     }
    // }
    static async buscarPorTituloOuAutor(titulo, autor) {
        try {
            const livros = await LivroModel.buscarPorTituloOuAutor(titulo, autor); // Passa os dois parâmetros
            if (!livros || livros.length === 0) {
                console.log('Nenhum livro encontrado!');
                return [];
            }
            console.log('Livros encontrados:', livros);
            return livros;
        } catch (error) {
            console.error('Erro ao buscar livro:', error);
            throw error;
        }
    }
    
    static async atualizar(titulo, autor, ano_publicacao){
        try {
            if (!titulo || !autor || !ano_publicacao) {
                return console.error('Todos os campos devem ser preenchidos!');
            }
            const livro = await LivroModel.atualizar(titulo, autor, ano_publicacao);
            if (livro.length === 0) {
                return console.error('Livro não encontrado!');
            }
            console.log('Livro atualizado com sucesso!');
            return livro;
        } catch (error) {
            console.error('Erro ao atualizar livro:', error.message);
        }
    }
    static async exluirLivro(autor){
        try {
            const livro = await LivroModel.buscarPorTituloOuAutor(autor);
            if (livro.length === 0) {
                return console.error('Livro não encontrado!');
            }
            await LivroModel.excluirLivro(autor);
            console.log('Livro excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir o livro:', error.message);
        }
    }
}

export default LivroController