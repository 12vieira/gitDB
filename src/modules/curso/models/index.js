
// MODELS - Curso
import client from '../../../config/database.js';

class CursoModel {
    static async criar(cod_curso, nome_curso) {
        const dados = [cod_curso, nome_curso];
        const consulta = `insert into curso(cod_curso, nome_curso) values ($1, $2) returning *;`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async listarTodos() {
        const consulta = `select * from curso`;
        const resultado = await client.query(consulta);
        return resultado.rows;
    }
    static async atualizarCurso(cod_curso, nome_curso) {
        const dados = [nome_curso, cod_curso];
        const consulta = `update curso set nome_curso = $1 where cod_curso = $2 returning *`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async deletarCurso(cod_curso) {
        const dados = [cod_curso];
        const consulta = `delete from curso where cod_curso = $1`;
        await client.query(consulta, dados);
    }
    static async listarPorCodigo(cod_curso) {
        const dados = [cod_curso];
        const consulta = `select * from curso where cod_curso = $1`;
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async totalAlunosPorCurso(cod_curso) {
        const dados = [cod_curso];
        const consulta = `
            select count(aluno.cod_curso) as total_aluno from curso
            join aluno on curso.cod_curso = aluno.cod_curso
            where aluno.cod_curso = $1`
        const total_alunos_curso = await client.query(consulta, dados)
        return total_alunos_curso.rows
    }
    static async listarAlunosPorCurso(cod_curso) {
        const dados = [cod_curso];
        const consulta = `
            select aluno.nome, curso.nome_turma from curso
            join aluno on curso.cod_curso = aluno.cod_curso
            where aluno.cod_curso = $1`
        const resultado = await client.query(consulta, dados);
        return resultado.rows;
    }
    static async listarProfessoresPorCurso(cod_curso){
        const dados = [cod_curso];
        const consulta = `
            select professor.nome, curso.nome_turma from curso
            join professor on curso.cod_curso = professor.cod_curso
            where professor.cod_curso = $1;`
        const resultado = await client.query(consulta, dados);
        return resultado.rows
    }
    

}

export default CursoModel;
