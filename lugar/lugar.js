const axios = require('axios');

const getLugarLatLng = async (ciudad, pais) => {

    const appId = '1791cce76f32f77cbf63ab0ebfd84a9b';

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(ciudad)},${encodeURI(pais)}&appid=${appId}`
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${ciudad}`)
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}