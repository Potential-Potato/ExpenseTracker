import { useState } from "react";

import BudgetModal from "../components/modals/BudgetModal";
import CategoryModal from "../components/modals/CategoryModal";

const Budget = () => {
  const [isBudgetModalOpen, setisBudgetModalOpen] = useState(false);
  const [isCategoryModalOpen, setisCategoryModalOpen] = useState(false);

  return (
    <div>
      <section className="flex flex-wrap gap-12 justify-end mb-8">
        <div className="flex flex-wrap gap-12">
          Budget
          <button
            onClick={() => setisBudgetModalOpen(true)}
            className=" selectButton bg-green-500 text-white"
          >
            Add Budget
          </button>
          <button
            onClick={() => setisCategoryModalOpen(true)}
            className=" selectButton bg-green-500 text-white"
          >
            Add Category
          </button>
        </div>
      </section>

      <button className="fixed right-8 bottom-8 text-4xl px-3 py-2 text-green-500 rounded-sm">
        +
      </button>

      <BudgetModal
        isOpen={isBudgetModalOpen}
        onClose={() => {
          setisBudgetModalOpen(false);
        }}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => {
          setisCategoryModalOpen(false);
        }}
      />
    </div>
  );
};

export default Budget;
