import axios from 'axios'
import { ElMessage } from 'element-plus';
const BASE_URL = "http://43.156.39.234:8080/";

const instance = axios.create({
  baseURL: BASE_URL
});

export default instance;