const { syncDB } = require("../../tasks/sync-db")

// Agrupador de pruebas
describe('Pruebas en Sync-DB', () => {

    // Prueba individual
    test('Debe de ejecutar el proceso dos veces', () => {

        syncDB();
        const times = syncDB();
        console.log('Se llamo ', times);

        expect( times ).toBe( 2 );
    })
})