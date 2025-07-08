import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { defaultError } from "../utils/defaultError";

export const useTransactions = () => {
  const queryClient = useQueryClient();

  // fetch
  const { data, isLoading, isError } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await axios.get("/transactions");
      return res.data;
    },
  });

  // add
  const addMutation = useMutation({
    mutationFn: async (formData) => {
      const payload = Object.fromEntries(formData.entries());
      await axios.post("/transactions/add", payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
      toast.success("Successfully added!");
    },
    onError: defaultError,
  });

  // edit
  const editMutation = useMutation({
    mutationFn: async ({ id, payload }) => {
      await axios.patch(`/transactions/edit/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
      toast.success("Successfully updated!");
    },
    onError: defaultError,
  });

  // delete
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`/transactions/delete/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
      toast.success("Successfully deleted!");
    },
    onError: defaultError,
  });

  // actual function work (being called)
  const addTransaction = (formData) => addMutation.mutate(formData);
  const editTransaction = (id, formData) => {
    const payload = Object.fromEntries(formData.entries());
    editMutation.mutate({ id, payload });
  };
  const deleteTransaction = (id) => deleteMutation.mutate(id);

  return {
    data,
    isLoading,
    isError,
    addTransaction,
    editTransaction,
    deleteTransaction,
  };
};
