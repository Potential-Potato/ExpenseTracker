export function Card({ title, amount, image }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 w-64 flex flex-col items-center">
      <p className="text-gray-600 mb-2">{amount}</p>
      {/* <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover rounded-sm"
        /> */}
      <div className="w-full h-24 bg-black rounded-sm" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
    </div>
  );
}
