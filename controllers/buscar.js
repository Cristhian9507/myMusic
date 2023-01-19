const { request, response } = require('express');
const { consultarPorBanda } = require('../services/itunes');
const { redisClient } = require('../databases/redis-client');

const buscarCancionesArtista = async (req = request, res = response) => {
    const { term: banda } = req.query;
    let response = {};

    //TODO: gregar metada a la respuesta

    //busqueda en redis
    const cacheResults = await redisClient.get(banda);
    if (cacheResults) {
        response = JSON.parse(cacheResults);
        console.log('response cache');//borrar
    } else {

        const resultados = await consultarPorBanda(banda);
        const resFilter = (resultados.filter(song =>
            song.artistName.toLowerCase() == banda.toLocaleLowerCase()))
            .slice(0, 25);
        let albumes = resFilter.map((songs) => songs.collectionName);
        albumes = albumes.filter((item,index) => {
            return albumes.indexOf(item) === index;
        })
        const canciones = resFilter.map(songAdapter); //apply adapter
        response.total_albumes = albumes.length
        response.total_canciones = canciones.length;
        response.albumes = albumes;
        response.canciones = canciones; 
        console.log('response api'); //borrar
        //guardar en redis
        if (response.canciones != undefined) {
            await redisClient.set(banda, JSON.stringify(response), {
                EX: 3600,
                NX: true,
            });
        }
    }


    res.json(response);
}

const songAdapter = (song) => {
    return {
        cancion_id: song.trackId,
        nombre_album: song.collectionName,
        nombre_tema: song.trackName,
        preview_url: song.previewUrl,
        fecha_lanzamiento: song.releaseDate,
        precio: {
            valor: song.trackPrice,
            moneda: song.currency
        }
    };
}

module.exports = {
    buscarCancionesArtista
}