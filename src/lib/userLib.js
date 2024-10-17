import axios from "axios";

export async function updateName(id, name) {
  const url = `/test/${id}`;
  const res = await axios.patch(url, { id: id, name: name });
  return res;
}
