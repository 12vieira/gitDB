import client from '../../../config/database.js'

class UsuarioModel{
    static async criar(nome, matricula, telefone){
        const dados = [nome, matricula, telefone];
        const consulta = `insert into usuario(nome, matricula, telefone) values ($1, $2, $3) returning *;`
        const resultado = await client.query(consulta,dados);
        return resultado.rows;
    }
    static async buscarPorMatricula(matricula){
        const dados = [matricula];
        const consulta = `select * from usuario where matricula = $1`
        const resultado = await client.query(consulta, dados);
        return resultado.rows
    }
    static async atualizar(nome, matricula, telefone){
        const dados = [nome, matricula, telefone];
        const consulta = `update aluno set nome = $1, telefone = $3 where matricula = $2 returning *`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async excluirUsuario(matricula) {
        const dados = [matricula];
        const consulta = `delete from usuario where matricula = $1`;
        await client.query(consulta, dados);
      }
}

export default UsuarioModel