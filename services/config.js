import axios from 'axios';

const BASE_URL = 'http://10.0.2.2:5000';

export default axios.create({baseURL: BASE_URL});
