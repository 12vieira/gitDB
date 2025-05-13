import dotenv from 'dotenv'
dotenv.config()
import client from '../config/database.js'

class CriarTabela{
    static async usuario(){
        const consulta = `create table if not exists
        usuario(
            id_usuario integer primary key,
            nome varchar(100) not null,
            matricula varchar(10) not null,
            telefone varchar(15) not null
        );`
        await client.query(consulta)
        console.log('Tabela usuario criada com sucesso!')
    }
    static async livro(){
        const consulta = `create table if not exists
        livro(
            id_livro integer primary key,
            titulo varchar(100) not null,
            autor varchar(100) not null,
            ano_publicacao integer
        );`
        await client.query(consulta)
        console.log('Tabela livro criada com sucesso!')
    }
    static async emprestimo(){
        const consulta = `create table if not exists
        emprestimo(
            id_emprestimo integer primary key,
            data_emprestimo date not null,
            data_devolucao date not null,
            status varchar(100) not null,
            id_usuario integer references usuario(id_usuario)
            id_livro integer references livro(id_livro)
        );`
        await client.query(consulta)
        console.log('Tabela livro criada com sucesso!')
    }
}

export default CriarTabela