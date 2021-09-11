import axios from "axios";

const url = "https://chat-cadmus.herokuapp.com/";

export const api = axios.create({
  baseURL: url,
});

export const sock = url;
