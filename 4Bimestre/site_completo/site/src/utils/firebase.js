import * as SQLite from 'expo-sqlite';

let db;

export async function abrirBanco() {
    if (!db) {
        db = await SQLite.openDatabaseAsync('devhub.db');
    }

    return db;
}

export async function criarTabelaProjetos() {
    const banco = await abrirBanco();

    await banco.execAsync(`
        CREATE TABLE IF NOT EXISTS projetos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            descricao TEXT NOT NULL,
            tecnologia TEXT NOT NULL,
            status TEXT NOT NULL,
            criado_em TEXT NOT NULL
        );
    `);
}

export async function listarProjetos() {
    const banco = await abrirBanco();

    const projetos = await banco.getAllAsync(`
        SELECT *
        FROM projetos
        ORDER BY id DESC;
    `);

    return projetos;
}

export async function criarProjeto(
    nome,
    descricao,
    tecnologia,
    status
) {
    const banco = await abrirBanco();

    const dataAtual = new Date().toISOString();

    const resultado = await banco.runAsync(
        `
        INSERT INTO projetos
        (nome, descricao, tecnologia, status, criado_em)
        VALUES (?, ?, ?, ?, ?);
        `,
        nome,
        descricao,
        tecnologia,
        status,
        dataAtual
    );

    return resultado;
}

export async function excluirProjeto(id) {
    const banco = await abrirBanco();

    await banco.runAsync(
        `
        DELETE FROM projetos
        WHERE id = ?;
        `,
        id
    );
}