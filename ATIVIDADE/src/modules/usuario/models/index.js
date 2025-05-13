import client from '../../../config/database.js'

class UsuarioModel{
    static async criar(id_usuario, nome, matricula, telefone){
        const dados = [id_usuario, nome, matricula, telefone];
        const consulta = `insert into usuario(id_usuario, nome, matricula, telefone) values ($1, $2, $3, $4) returning *;`
        const resultado = await client.query(consulta,dados);
        return resultado.rows;
    }
    static async buscarPorMatricula(matricula){
        const dados = [matricula];
        const consulta = `select * from usuario where matricula = $1`
        const resultado = await client.query(consulta, dados);
        return resultado.rows
    }
    static async atualizar(id_usuario, nome, matricula, telefone){
        const dados = [id_usuario, nome, matricula, telefone];
        const consulta = `update usuario set id_usuario = $1, nome = $2, telefone = $4 where matricula = $3 returning *`
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