import client from '../../../config/database.js'

class LivroModel{
    static async criar(id_livro, titulo, autor, ano_publicacao){
        const dados = [id_livro, titulo, autor, ano_publicacao];
        const consulta = `insert into livro (id_livro, titulo, autor, ano_publicacao) values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta,dados);
        return resultado.rows;
    }
    // static async buscarPorTituloOuAutor(titulo || autor){
    //     const dados = [titulo, autor];
    //     const consulta = `select * from livro where titulo = $1 or autor = $2`
    //     const resultado = await client.query(consulta, dados);
    //     return resultado.rows
    // }
    static async buscarPorTituloOuAutor(titulo, autor) {
        let consulta = 'SELECT * FROM livro WHERE';
        const dados = [];
        const condicoes = [];
    
        if (titulo) {
            condicoes.push('titulo = $' + (dados.length + 1));
            dados.push(titulo);
        }
    
        if (autor) {
            condicoes.push('autor = $' + (dados.length + 1));
            dados.push(autor);
        }
    
        if (condicoes.length === 0) {
            throw new Error('É necessário fornecer pelo menos o título ou o autor.');
        }
    
        consulta += ' ' + condicoes.join(' OR ');
    
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    
    static async atualizar(id_livro, titulo, autor, ano_publicacao){
        const dados = [id_livro, titulo, autor, ano_publicacao];
        const consulta = `update livro set titulo = $2, autor = $3, ano_publicacao = $4 where id_livro = $1 returning *`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async excluirLivro (id_livro) {
        const dados = [id_livro];
        const consulta = `delete from livro where id_livro = $1`;
        await client.query(consulta, dados);
      }
}

export default LivroModel