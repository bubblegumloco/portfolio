import React from "react";

const AddressBar = () => {
  return (
    <div>
      <div className="bg-black py-1">
        <div className="flex justify-between items-center mx-2">
          <div className="flex justify-between items-center gap-1">
            <div className="bg-red-500 h-1.5 w-1.5 rounded-[50%] m-auto"></div>
            <div className=" bg-yellow-400 h-1.5 w-1.5 rounded-[50%] m-auto"></div>
            <div className=" bg-green-600 h-1.5 w-1.5 rounded-[50%] m-auto"></div>
          </div>
          <div className="border-[#57534E] border-2 w-[200px] bg-[#57534E] h-[10px]"></div>
          <div className="border-black border-2 w-[20px] bg-black h-[10px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AddressBar;
