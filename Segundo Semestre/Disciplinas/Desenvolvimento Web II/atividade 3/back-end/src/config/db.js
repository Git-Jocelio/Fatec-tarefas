const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "megasena",
  password: "postgres",
  port: 5432,
});

module.exports = pool;