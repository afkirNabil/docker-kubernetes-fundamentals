
// variable para que los test no fallen y poder ver la explicacion de como ejecutar tests de codigo desde el dockerfile cuando se construye la imagen.
let times = 0;

const syncDB = () => {
    times++;
    console.log('Tick cada multiplos de 5 segundos. Numero de veces: ', times);

    return times;
}

// esta es la manera de exportar modulos en node. Diferente a la de angular y typescript.
module.exports = {
    syncDB
}