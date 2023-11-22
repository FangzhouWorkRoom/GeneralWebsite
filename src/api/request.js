import axios from 'axios'
const BASE_URL = "https://backend.zjhylgbb.cn/";

const instance = axios.create({
  baseURL: BASE_URL
});

export default instance;