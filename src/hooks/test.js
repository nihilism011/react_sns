import { useEffect, useState } from "react";
import axios from "axios";

export const useTestUser = (id) => {
  const [testList, setTestList] = useState([]);
  const userId = id;
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setTestList(data);
      })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setTestList([]);
      });
  }, [userId]);

  return testList;
};
