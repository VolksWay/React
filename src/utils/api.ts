import axios from "axios";

/* const api = axios.create({
    baseURL: "http://localhost:8099/"
})
 */

const api = axios.create(
    {
        baseURL: "https://volksway-api.azurewebsites.net"
    })
export default api;