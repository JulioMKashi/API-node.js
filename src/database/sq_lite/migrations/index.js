const sqliteConnection = require('../../sq_lite');
const createUsers = require('./createUser');

async function migrationsRun(){
    const schemas = [
        createUsers
    ].join('');

    sqliteConnection().then(db => db.exec(schemas))
    .catch(error => console.error(error));
}

module.exports = migrationsRun;