import axios from "axios";
const API_URL = "https://radiant-hamlet-41705.herokuapp.com";

export const api = axios.create({
  baseURL: `${API_URL}/api`,
});

export const callApi = async ({ url, method, token, body }) => {
  console.log({ url: `${API_URL}/api${url}`, method, token, body });
  try {
    const options = {
      method: method ? method.toLowerCase() : "get",
      url: `${API_URL}/api${url}`,
      data: body,
    };
    if (token) {
      options.headers = { Authorization: `Bearer ${token}` };
    }
    const { data } = await api(options);
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    throw error;
  }
};
