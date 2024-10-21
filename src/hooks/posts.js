import { useEffect } from "react";
import { getAxios } from "../lib/restAxios";

export const usePosts = (key, page) => {
  useEffect(() => {
    if (key === "all") {
      const url = "/post/all";
      const data = getAxios(url);
    }
  }, [key, page]);
};
