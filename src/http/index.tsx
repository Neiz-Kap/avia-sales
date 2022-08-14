import axios from "axios";

const $api = axios.create({
  baseURL: `https://api.npoint.io/`,
});

export const fetchTikets = async () => {
  const { data } = await $api.get("/163b5e66df9f2741243e");
  return data;
};

export const fetchCompanies = async () => {
  const { data } = await $api.get("/a1b1c28b32d9785bb26c");
  return data;
};
