import { timeout } from "async";
import axios from "axios";

const client= axios.create({
    baseURL:"https://api.github.com",
    timeout:5000,

});



export{client};





// client.interceptors.request.use(()=>{})