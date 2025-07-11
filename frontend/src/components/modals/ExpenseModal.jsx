const ExpenseModal = ({ isOpen, onClose, onSave, editingData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-lg font-bold mb-4">
          {editingData ? "Edit Expense" : "Add Expense"}
        </h2>

        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            onSave(formData);
          }}
        >
          <select
            name="categoryId"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
            defaultValue={editingData?.category_id || ""}
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
            defaultValue={editingData?.amount || ""}
            className="border border-gray-300 rounded-md px-4 py-2"
            required
          />

          <select
            name="type"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
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
            defaultValue={
              editingData?.date ? editingData.date.split("T")[0] : ""
            }
            required
          />

          <select
            name="status"
            required
            className="border border-gray-300 rounded-md px-4 py-2"
            defaultValue={editingData?.status || ""}
          >
            <option value="">Select Status</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
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

        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button> */}
      </div>
    </div>
  );
};

export default ExpenseModal;
