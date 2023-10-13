import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Aakash_301",
  database: "blog",
  charset: "utf8mb4_unicode_ci",
});
