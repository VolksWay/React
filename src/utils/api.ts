import axios from "axios";

/* const api = axios.create({
    baseURL: "http://localhost:8099/"
})
 */

const api = axios.create(
    {
        baseURL: "http://localhost:8099"
    })
export default api;