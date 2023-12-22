import axios from "axios";

let api = 'bbf360969d7438982912be305a79d3a2';
let axiosInstance = axios.create({

    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: api,
    }
})

export default axiosInstance;