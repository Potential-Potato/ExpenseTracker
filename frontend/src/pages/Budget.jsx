import React from "react";

const Budget = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-12 justify-end mb-8">
        <div className="flex flex-wrap gap-12">
          <button className=" selectButton bg-green-500 text-white">
            Add Budget
          </button>
        </div>
      </section>
      Budget
      <button className="fixed right-8 bottom-8 text-4xl px-3 py-2 text-green-500 rounded-sm">
        +
      </button>
    </div>
  );
};

export default Budget;
