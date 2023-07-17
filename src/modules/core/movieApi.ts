import axios from 'axios';
import env from "react-dotenv";

/** OMDB API configs */
const OMDB_API_KEY = env.OMDB_API_KEY;
const movieApiBaseUrl = env.OMDB_API_BASE_URL;
export const movieApi = axios.create({
    baseURL: movieApiBaseUrl,
    params: {
        apikey: OMDB_API_KEY,
    },
});
