import { toast } from "react-hot-toast";

export const defaultError = (err) => {
  toast.error(error?.response?.data?.message || "Something went wrong");
};
