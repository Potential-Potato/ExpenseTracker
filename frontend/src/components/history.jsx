import React from "react";

export default function history({ image, transactionName, amount, status }) {
  return (
    <div className="p-4 flex items-center justify-between w-full">
      <div className="w-12 h-12 bg-black rounded-sm" />
      {/* <img
          src={image}
          alt={title}
          className="w-full h-24 object-cover rounded-sm"
        /> */}
      <p>{transactionName}</p>
      <p>{amount}</p>
      <p>{status}</p>
    </div>
  );
}
