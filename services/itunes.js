const axios = require('axios');

const consultarPorBanda = async (banda) => {
    const params = new URLSearchParams([['term', banda]]);
    const { data: { results } } = await axios.get('https://itunes.apple.com/search', { params });
    return results;
}

const consultarBandaCancion = async (cancion_id, banda) => {
    const params = new URLSearchParams([['term', banda]]);
    const { data: { results } } = await axios.get('https://itunes.apple.com/search', { params });
    const resFilter = (results.filter(song =>
        song.artistName.toLowerCase() == banda.toLocaleLowerCase()
        && song.trackId == cancion_id))
        .slice(0, 2);
    return resFilter;
}

module.exports = { consultarPorBanda, consultarBandaCancion }