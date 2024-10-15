import axios from "axios";

export async function updateName(id, name) {
  const url = `http://localhost:3001/test/${id}`;
  const res = await axios.patch(url, { id: id, name: name });
  return res;
}
export const formSubmit = (form) => {
  const url = "http://localhost:3001/user/signup/submit";
  axios.post(url, form.current).then(({ data }) => {
    alert("회원가입 완료");
  });
};
