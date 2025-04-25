import client from '../../../config/database.js'
class AlunoModel{
    static async criar(nome, email, matricula, telefone, cod_turma){
            const dados = [nome, email, matricula, telefone, cod_turma]
            const consulta = `insert into aluno(nome, email, matricula, telefone, cod_turma)
            values ($1, $2, $3, $4, $5) returning *;`
            const resultado = await client.query(consulta, dados);
            return resultado.rows 
    }
    static async listarTodos(){
        const consulta = `select * from aluno`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async listarPorEmail(email){
        const dados = [email]
        const consulta = `select * from aluno where email = $1`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async atualizarAluno(nome, email, matricula, telefone, cod_turma){
        const dados = [nome, email, matricula, telefone, cod_turma]
        const consulta = `update aluno set nome = $1, matricula = $3, telefone = $4, cod_turma = $5 
        where email = $2 returning *`
        const resultado = await client.query(consulta, dados)
        return resultado.rows
    }
    static async deletarAluno(email){
        const dados = [email]
        const consulta = `delete from aluno where email = $1`
        await client.query(consulta,dados)
    }
    static async deletarTodos(){
        const consulta = `delete from aluno`
        await client.query(consulta)
    }
    // quantidade de alunos
    static async totalAlunos(){
        const consulta = `select count(email) as total from aluno`
        const resultado = await client.query(consulta)
        return resultado.rows
    }
    static async totaAlunosPorCurso(cod_turma){
        const dados = [cod_turma];
        const consulta = `select count(aluno.cod_turma) as total_aluno from curso
        join aluno on curso.cod_curso = aluno.cod_curso
        where aluno.cod_curso = $1`
        const total_alunos_curso = await client.query(consulta, dados);
        return total_alunos_curso.rows;
    }
    static async listarAlunosPorCurso(cod_curso){
        const dados = [cod_curso];
        const consulta = `select aluno.cod_turma, curso.nome_turma from curso
        join aluno on curso.cod_curso = aluno.cod_curso
        where aluno.cod_curso = $1`
        const resultado = await client.query(consulta,dados);
        return resultado.rows;
    }
}

export default AlunoModel