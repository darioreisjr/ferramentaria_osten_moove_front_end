import axios from "axios";

const toolsFetch = axios.create({
  baseURL: "http://localhost:3001",
  headers:{
    "Content-type": "application/json",
  }
});

export default toolsFetch;