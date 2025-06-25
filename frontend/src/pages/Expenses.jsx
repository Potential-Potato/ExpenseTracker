import ButtonSelect from "../components/buttonSelect";
import ButtonDate from "../components/buttonDate";
import CardLong from "../components/cardLong";

const Expenses = () => {
  return (
    <div>
      <section className="flex flex-wrap gap-12 justify-between mb-8">
        <div className="flex flex-wrap gap-12 debug1">
          <ButtonDate />
          <ButtonSelect />
        </div>
        <button className="selectButton bg-green-500 text-white">
          Add Expense
        </button>
      </section>

      <main className="flex gap-2 flex-col">
        <CardLong
          name="burger"
          category="food"
          value="Php 3000"
          date="1/3/25"
          status="completed"
        />
        <CardLong
          name="burger"
          category="food"
          value="Php 3000"
          date="1/3/25"
          status="completed"
        />
      </main>
    </div>
  );
};

export default Expenses;
