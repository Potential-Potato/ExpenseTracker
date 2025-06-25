export default function Card({ icon, title, amount }) {
  return (
    <div className="w-52 bg-white p-6 rounded-2xl shadow-md">
      <p className="text-3xl font-semibold mb-2 p2">{title}</p>
      <div className="flex gap-2 flex-1">
        <p className="text-yellow-600 text-sm">🍔</p>
        <p className="text-sm font-bold ">{amount}</p>
      </div>
    </div>
  );
}
