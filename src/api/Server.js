import axios from "axios";

const Server = axios.create({
  baseURL: "http://localhost:1337/api/v1/playercard",
});

export default Server;
