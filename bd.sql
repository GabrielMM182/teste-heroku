const { Pool } = require('pg');

const Pool = new Pool({
    user: 'database-test',
    host: 'app-blablabla123',
    database: 'blablablaaaa',
    password: '455757575',
    port: 5432,
    ssl: {
        rejecUnauthorized: false
    }
})