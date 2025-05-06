import React from 'react'

const Manager = () => {
  return (
      <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div></div>
    <div className=" p-3 md:mycontainer min-h-[88.2vh] ">
        <h1 className='text-4xl text font-bold text-center'>
            <span className='text-green-500'> &lt;</span>

            <span>Pass</span><span className='text-green-500'>U/&gt;</span>
            </h1>
            <div className='text-white flex-col flex gap-1 p-3'>
                <input type="text" className='rounded-2xl bg-amber-100' />

            </div>
            </div>
        </>
    )    
}

export default Manager