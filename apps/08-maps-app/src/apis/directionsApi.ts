import axios from 'axios';

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        notifications: 'none',
        access_token: 'MAPBOX_TOKEN_REMOVED'
    }
});

export default directionsApi;