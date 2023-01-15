import axios from "axios"

export default axios.create({
    baseURL: process.env.REACT_APP_THE_MOVIE_URL,
    Headers: {
        Accept: 'application/json'
    },
    params: {
        api_key: process.env.REACT_APP_THE_MOVIE_KEY
    }
})