import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("app.db");

export function criarBanco() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      senha TEXT NOT NULL
    );
  `);
}

export function cadastrarUsuario(nome, email, senha) {
  const resultado = db.runSync(
    "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)",
    nome,
    email,
    senha
  );

  return resultado;
}

export function verificarLogin(email, senha) {
  const usuario = db.getFirstSync(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    email,
    senha
  );

  return usuario;
}