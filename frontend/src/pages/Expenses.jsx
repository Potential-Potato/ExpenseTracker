import { useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { useUser } from "../context/UserContext";
import ButtonSelect from "../components/buttonSelect";
import ButtonDate from "../components/buttonDate";
import CardLong from "../components/cardLong";

import ExpenseModal from "../components/modals/ExpenseModal";

const Expenses = () => {
  const { user } = useUser();
  const {
    data,
    isLoading,
    isError,
    addTransaction,
    editTransaction,
    deleteTransaction,
  } = useTransactions();

  const [activeCard, setActiveCard] = useState(null);
  const [editingData, setEditingData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (formData) => {
    if (editingData) {
      editTransaction(editingData.transaction_id, formData);
    } else {
      addTransaction(formData);
    }
    setEditingData(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <section className="flex flex-wrap gap-12 justify-between mb-8">
        <div className="flex flex-wrap gap-12">
          <ButtonDate />
          <ButtonSelect />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
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
              onDelete={() => deleteTransaction(t.transaction_id)}
              onEdit={() => {
                setEditingData(t);
                setIsModalOpen(true);
              }}
            />
          ))
        )}
      </main>

      <ExpenseModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingData(null);
        }}
        onSave={handleSave}
        editingData={editingData}
      />
    </div>
  );
};

export default Expenses;
