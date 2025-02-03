import React from "react";

function InfiniteTicker({
  message = "Gastos de envío GRATUITOS por compras superiores a 65€ 🚚",
}) {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-2 rounded-b-lg">
      <div className="flex whitespace-nowrap animate-marquee lg:animate-marquee-lg">
        <p className="mr-8 text-sm">{message}</p>
        <p className="mr-8 text-sm">{message}</p>
        <p className="mr-8 text-sm">{message}</p>
        <p className="mr-8 text-sm">{message}</p>
      </div>
    </div>
  );
}

export default InfiniteTicker;
