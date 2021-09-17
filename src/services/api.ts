import axios from "axios";

const url = "https://dynamusdev-api.herokuapp.com/";

export const api = axios.create({
  baseURL: url,
});

export const sock = url;
