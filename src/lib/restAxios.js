import axios from "axios";

export const postAxios = async (url, form) => {
  try {
    const { data } = await axios.post(url, form);
    return data;
  } catch (err) {
    console.error(err);
    return false;
  }
};
