import axios from "axios";

const instance = axios.create({
  baseURL: 'yours'
});

export default instance;
