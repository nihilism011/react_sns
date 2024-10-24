import { jwtDecode } from "jwt-decode";

export function userDecode(token) {
  const user = token ? jwtDecode(token) : null;
  return user;
}
