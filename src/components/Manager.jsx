import React from "react";

const Manager = () => {
  return (
    <>
  
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className=" p-3 px-40 py-16 mx-auto min-h-[88.2vh] ">
        <h1 className="text-4xl text font-bold text-center">
          <span className="text-green-500"> &lt;</span>

          <span>Pass</span>
          <span className="text-green-500">U/&gt;</span>
        </h1>
        <div className="text-white flex-col flex gap-1 p-3">
          <input
            type="text"
            on
            className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3"
          />
          <div className="flex w-full gap-5 justify-center items-center">
            <input
              className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
              type="text"
            />
            <input
              className="rounded-2xl bg-amber-100 border-2 border-amber-400 hover:bg-amber-300 px-3 w-full"
              type="text"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 w-fit rounded-full px-2 mx-auto"
          >
            {/* <lord-icon
              src="https://cdn.lordicon.com/ogjpwrxe.json"
              trigger="hover"
              
            ></lord-icon> */}
           
            <img src="/icons8-add.gif" trigger="click" alt="" />
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
