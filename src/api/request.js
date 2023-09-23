import axios from 'axios'
import { ElMessage } from 'element-plus';
const BASE_URL = "http://192.168.3.11:8080/";

const instance = axios.create({
  baseURL: BASE_URL
});

export default instance;