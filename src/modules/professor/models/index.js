
// MODELS - Professor
import client from '../../../config/database.js';

class ProfessorModel {
   static async criar(nome, matricula, cod_curso) {
    const dados = [nome, matricula, cod_curso];
    const consulta = `insert into professor(nome, matricula, cod_curso)
     values ($1, $2, $3) returning *;`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  static async listarTodos() {
    const consulta = `select * from professor`;
    const resultado = await client.query(consulta);
    return resultado.rows;
  }
  static async atualizarProfessor(nome, matricula, cod_curso) {
    const dados = [nome, cod_curso, matricula];
    const consulta = `update professor set nome = $1, cod_curso = $2 where matricula = $3 returning *`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  static async deletarProfessor(matricula) {
    const dados = [matricula];
    const consulta = `delete from professor where matricula = $1`;
    await client.query(consulta, dados);
  }
  static async listarPorMatricula(matricula) {
    const dados = [matricula];
    const consulta = `select * from professor where matricula = $1`;
    const resultado = await client.query(consulta, dados);
    return resultado.rows;
  }
  static async totalProfessores(){
      const consulta = `selec count(matricula) as total from professor;`
      const resultado = await client.query(consulta)
      return resultado.rows
  }
}

export default ProfessorModel;
