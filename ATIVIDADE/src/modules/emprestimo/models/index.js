import client from "../../../../src/config/database.js"
// MODELS - emprestimo

class EmprestimoModel {
    static async criar(id_livro, id_usuario, status, data_emprestimo, data_devolucao) {
        const dados = [id_livro, id_usuario, status, data_emprestimo, data_devolucao];
        const consulta = `insert into emprestimo(id_livro, id_usuario, status, data_emprestimo, data_devolucao) values ($1, $2, $3, $4, $5) returning *;`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async listarPorLivroOuUsuario(id_livro, id_usuario) {
        const dados = [id_livro, id_usuario];
        const consulta = `select * from emprestimo where id_livro = $1 or id_usuario = $2`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    // static async listarPorLivroOuUsuario(id_livro, id_usuario) {
    //     let consulta = 'SELECT * FROM emprestimo WHERE';
    //     const dados = [];
    //     const condicoes = [];
    
    //     if (id_livro !== null && id_livro !== undefined) {
    //         condicoes.push(`id_livro = $${dados.length + 1}`);
    //         dados.push(id_livro);
    //     }
    
    //     if (id_usuario !== null && id_usuario !== undefined) {
    //         condicoes.push(`id_usuario = $${dados.length + 1}`);
    //         dados.push(id_usuario);
    //     }
    
    //     if (condicoes.length === 0) {
    //         throw new Error('Pelo menos um parâmetro (id_livro ou id_usuario) deve ser informado.');
    //     }
    
    //     consulta += ' ' + condicoes.join(' OR ');
    
    //     const resultado = await client.query(consulta, dados);
    //     return resultado.rows;
    // }
    static async filtrar(status) {
        const dados = [status];
        const consulta = `
            select * from emprestimo where status = $1`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async totalEmprestimo(){
        const consulta = `select count(id_emprestimo) as total from emprestimo`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async listarTodos() {
        const consulta = `select * from emprestimo`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }
    static async atualizarEmprestimo(id_livro, status) {
        const dados = [id_livro, status];
        const consulta = `update emprestimo set status = $2 where id_livro = $1 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async deletarEmprestimo(id_livro) {
        const dados = [id_livro];
        const consulta = `delete from emprestimo where id_livro = $1`;
        await client.query(consulta, dados);
    }
}

export default EmprestimoModel;
