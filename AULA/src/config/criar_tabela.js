
import dotenv from 'dotenv'
dotenv.config()
import client from './database.js'

class CriarTabela{
    static async aluno(){
        const consulta = `create table if not exists aluno(
            nome varchar(100) not null,
            email varchar(100) not null unique,
            matricula char(5) not null,
            telefone char(11) not null,
            cod_curso char(3) references curso(cod_curso)
        );`
        await client.query(consulta)
        console.log('Tabela aluno criada com sucesso!')
    }
    static async professor(){
        const consulta = `create table if not exists professor(
            nome varchar(100) not null,
            matricula char(5) not null unique,
            cod_curso char(3) references curso(cod_curso) 
        )`
        await client.query(consulta)
        console.log('Tabela professor criada com sucesso!')
    }
    static async curso(){
        const consulta = `create table if not exists curso(
            cod_curso char(3) primary key,
            nome_curso varchar(60) not null
        )`
        await client.query(consulta)
        console.log('Tabela curso criada com sucesso!')
    }
}

export default CriarTabela
