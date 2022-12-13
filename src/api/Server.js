import axios from "axios";

const Server = axios.create({
  baseURL: "https://pwa-be.herokuapp.com/api/v1/playercard",
});

export default Server;
