import { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { useUser } from "../context/UserContext";
import ButtonSelect from "../components/buttonSelect";
import ButtonDate from "../components/buttonDate";
import CardLong from "../components/cardLong";

const Expenses = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const [activeCard, setActiveCard] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["transactions"],
    queryFn: async () => {
      const res = await axios.get("/transactions");
      return res.data;
    },
  });

  const addTransaction = async (formData) => {
    const payload = Object.fromEntries(formData.entries());
    const res = await axios.post("/transactions/add", payload);
    return res.data;
  };

  const deleteTransaction = useMutation({
    mutationFn: async (id) => await axios.delete(`/transactions/delete/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["transactions"]),
  });

  const editTransaction = useMutation({
    mutationFn: async ({ id, payload }) =>
      await axios.patch(`/transactions/edit/${id}`, payload),
    onSuccess: () => queryClient.invalidateQueries(["transactions"]),
  });

  const mutation = useMutation({
    mutationFn: addTransaction,
    onSuccess: () => {
      queryClient.invalidateQueries(["transactions"]);
      toggleModal();
    },
  });

  return (
    <div>
      <section className="flex flex-wrap gap-12 justify-between mb-8">
        <div className="flex flex-wrap gap-12">
          <ButtonDate />
          <ButtonSelect />
        </div>
        <button
          onClick={toggleModal}
          className="selectButton bg-green-500 text-white"
        >
          Add Expense
        </button>
      </section>

      <main className="flex gap-2 flex-col">
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error loading transactions.</p>
        ) : (
          data.map((t) => (
            <CardLong
              key={t.transaction_id}
              name={t.description}
              categoryName={t.category_name}
              category={t.category_id}
              value={`Php ${t.amount}`}
              date={new Date(t.date).toLocaleDateString("en-PH", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
              status={t.status}
              isActive={activeCard === t.transaction_id}
              onClick={() =>
                setActiveCard(
                  activeCard === t.transaction_id ? null : t.transaction_id
                )
              }
              onDelete={() => deleteTransaction.mutate(t.transaction_id)}
              onEdit={() => {
                setEditingData(t);
                setIsModalOpen(true);
              }}
            />
          ))
        )}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Add Expense</h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                setEditingData(null);

                if (editingData) {
                  const payload = Object.fromEntries(formData.entries());
                  editTransaction.mutate({
                    id: editingData.transaction_id,
                    payload,
                  });
                } else {
                  mutation.mutate(formData);
                }

                toggleModal();
                setEditingData(null);
              }}
            >
              {/* Example: dropdown you handle separately */}
              <select
                name="categoryId"
                className="border border-gray-300 rounded-md px-4 py-2"
                required
                defaultValue={editingData?.categoryId || ""}
              >
                <option value="">Select Category</option>
                <option value="8">Work</option>
                <option value="9">Personal</option>
                <option value="7">General</option>
                <option value="10">Savings</option>
              </select>

              <input
                name="amount"
                type="number"
                placeholder="Amount"
                className="border border-gray-300 rounded-md px-4 py-2"
                defaultValue={editingData?.amount || ""}
                required
              />

              <select
                name="type"
                className="border border-gray-300 rounded-md px-4 py-2"
                required
                defaultValue={editingData?.type || ""}
              >
                <option value="">Select Type</option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <input
                name="description"
                placeholder="Description"
                defaultValue={editingData?.description || ""}
                className="border border-gray-300 rounded-md px-4 py-2"
                required
              />

              <input
                name="date"
                type="date"
                className="border border-gray-300 rounded-md px-4 py-2"
                defaultValue={editingData?.date || ""}
                required
              />

              <select
                name="status"
                className="border border-gray-300 rounded-md px-4 py-2"
                defaultValue={editingData?.status || ""}
                required
              >
                <option value="">Select Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => {
                    toggleModal();
                    setEditingData(null);
                  }}
                  className="px-4 py-2 rounded-md bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-green-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>

            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
