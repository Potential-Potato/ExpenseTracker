export default function CardLong({
  name,
  category,
  categoryName,
  value,
  date,
  status,
  isActive,
  onClick,
  onDelete,
  onEdit,
}) {
  return (
    <div
      className="flex relative items-center min-h-20 bg-white rounded-lg shadow-md overflow-hidden"
      onClick={onClick}
    >
      {/* Only show buttons when active */}
      {isActive && (
        <div className="absolute right-0 top-0 h-full w-30 bg-gray-100 flex items-center justify-around">
          <button className="text-blue-500 font-bold" onClick={onEdit}>
            Edit
          </button>
          <button className="text-red-500 font-bold" onClick={onDelete}>
            Delete
          </button>
        </div>
      )}

      {/* Card content shifts left when active */}
      <div
        className={`flex h-full justify-between items-center w-full p-2 transition-all duration-300 ease-in-out ${
          isActive ? "sm:pr-36" : "p-0"
        } pl-4`}
      >
        <div className="flex flex-col flex-1">
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{categoryName}</p>
        </div>
        <p className="flex-1 text-sm  text-center">{value}</p>
        <p className="flex-1 text-sm  text-center">{date}</p>
        <p className="flex-1 text-sm  text-center">{status}</p>
      </div>
    </div>
  );
}
