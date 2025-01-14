const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'postgres.railway.internal',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'KEjrhoIgxyThUqhhriHiXvPuTTeCUewf',
    database: process.env.DB_NAME || 'tables',
});

module.exports = db;

