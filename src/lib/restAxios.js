import originAxios from "axios";

const axios = originAxios.create({
  baseURL: "/api/",
  headers: { token: sessionStorage.getItem("token") },
});
export const postAxios = async (url, form) => {
  try {
    const { data } = await axios.post(url, form);
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
export const getAxios = async (url, form = null) => {
  try {
    const { data } = await axios.get(url, { params: form });
    return data;
  } catch (err) {
    console.log(err);
    return false;
  }
};
