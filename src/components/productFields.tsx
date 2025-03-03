import React from "react";

function ProductFields({ title, array }: { title: string; array: string[] }) {
  return (
    <div>
      <h2 className="font-bold opacity-75">{title}</h2>
      {array?.map((value, index) => (
        <p
          key={index}
          className="opacity-45 text-sm font-semibold my-1 xl:text-[0.9rem]"
        >
          {value}
        </p>
      ))}
    </div>
  );
}

export default ProductFields;
