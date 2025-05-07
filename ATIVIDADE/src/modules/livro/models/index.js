import client from '../../../config/database.js'

class LivroModel{
    static async criar(titulo, autor, ano_publicacao){
        const dados = [titulo, autor, ano_publicacao];
        const consulta = `insert into livro (titulo, autor, ano_publicacao) values ($1, $2, $3) returning *;`
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
    
    static async atualizar(titulo, autor, ano_publicacao){
        const dados = [titulo, autor, ano_publicacao];
        const consulta = `update livro set titulo = $1, ano_publicacao = $3 where autor = $2 returning *`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async excluirLivro (titulo) {
        const dados = [titulo];
        const consulta = `delete from livro  where titulo = $1`;
        await client.query(consulta, dados);
      }
}

export default LivroModel