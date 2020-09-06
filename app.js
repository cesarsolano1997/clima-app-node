const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: 'Ciudad para obtener el clima',
        demand: true
    },
    pais: {
        alias: 'p',
        desc: 'Pais para obtener el clima',
        demand: true
    }
}).argv;

lugar.getLugarLatLng(argv.ciudad, argv.pais)
    .then(console.log);