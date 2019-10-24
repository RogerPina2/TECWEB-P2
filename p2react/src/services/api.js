import axios from "axios";

const api = axios.create({ baseURL: "https://api-nba-v1.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '881e8db56fmsh5a7397d04f7f773p1cc60ejsn9ff8b2b5357d'
    }
});

export default api;