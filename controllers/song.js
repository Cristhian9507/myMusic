const { request, response } = require('express');
const { redisClient: client } = require('../databases/redis-client');
const { consultarBandaCancion } = require('./../services/itunes');

const saveSong = async (req = request, res = response) => {
    const { nombre_banda, cancion_id, usuario, ranking } = req.body;
    rta = await consultarBandaCancion(cancion_id, nombre_banda);
    if (rta.length) {
        data = { nombre_banda, cancion_id, usuario, ranking };
        await addSongToUser(data);
        res.json(data);
    } else {
        res.json('Canción/banda no encontrada');
    }    
}


const listSong = async (req = request, res = response) => {
    const usuario = req.params.usuario;
    const data = await client.HGETALL('usuario_favoritos')
    const resp = data[usuario] ? JSON.parse(data[usuario]) : [];
    res.json(resp);
}

const addSongToUser = async (song) => {
    const data = await client.HGETALL('usuario_favoritos');
    if (data[song.usuario]) {
        const newdata = JSON.parse(data[song.usuario]);
        const cantidadMismaCancion = newdata.filter(favSong => favSong.cancion_id == song.cancion_id).length;
        // Se valida si la canción ya la tiene como favorita para evitar la repetición
        if (cantidadMismaCancion == 0) {
            newdata.push(song);
            await client.hSet('usuario_favoritos', song.usuario, JSON.stringify(newdata));
        }
    } else {
        await client.hSet('usuario_favoritos', song.usuario, JSON.stringify([song]));
    }
}

module.exports = {
    saveSong, listSong
}