import React from "react";

function AmountComponent({
  count,
  setcount,
}: {
  count: number;
  setcount: React.Dispatch<React.SetStateAction<number>>;
}) {
  function lessCounter() {
    if (count > 1) {
      setcount((prev) => prev - 1);
    }
  }
  return (
    <div className="grid grid-cols-[30%_40%_30%] w-[4rem]">
      <div
        onClick={lessCounter}
        className="bg-slate-50 border text-black rounded-l-xl text-center flex items-center justify-center hover:cursor-pointer"
      >
        -
      </div>
      <p className=" text-black border text-center flex items-center justify-center">
        {count}
      </p>
      <div
        onClick={() => {
          setcount((prev) => prev + 1);
        }}
        className="bg-slate-50 border text-black rounded-r-xl text-center flex items-center justify-center hover:cursor-pointer"
      >
        +
      </div>
    </div>
  );
}
export default AmountComponent;
