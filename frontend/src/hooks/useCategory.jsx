import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get("/categories");
      return res.data;
    },
  });
};
