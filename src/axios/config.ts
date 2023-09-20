import axios from "axios";

const toolsFetch = axios.create({
  baseURL: "https://ferramentariaostenmoovebackend.onrender.com",
  headers:{
    "Content-type": "application/json",
  }
});

export default toolsFetch;