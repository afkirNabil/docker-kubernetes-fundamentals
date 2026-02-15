const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log('Inicio de la app dockerizada con pruebas automaticas en el codigo fuente.')

cron.schedule('1-59/5 * * * * *', syncDB);