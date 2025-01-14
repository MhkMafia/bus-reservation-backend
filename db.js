const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'dpg-cu30gpogph6c73bl9oo0-a',
    user: process.env.DB_USER || 'bus_reservation_database_user',
    password: process.env.DB_PASSWORD || 'iPpsvaEpCdx8d66YiwN8LpNWf30ovhn9',
    database: process.env.DB_NAME || 'bus_reservation_database',
});

module.exports = db;

