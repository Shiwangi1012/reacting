import React from 'react'

const item = [
    {name: "Mahiya Ve", context: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {name: "Sajan Bin", context: "Lorem ipsum dolor sit, amet consectetur kvkdf kchdnfnljs djnvns kjhfsr, jn jkdncj dvksb adipisicing elit."}
]
const handleOnClick= ()=>{alert("hey")};

function Music() {
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center flex-col gap-4'>
        {item.map((item, index) => (
                <div key={index} className="song w-100 px-5 py-2 bg-zinc-100 rounded-md">
                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                    <p className='text-xs mt-1'>{item.context}</p>
                    <button onClick={handleOnClick} className='px-2 py-1 rounded text-xs text-white bg-blue-400 mt-3'>Download Now</button>
                </div> 
            )
        )}
    </div>
  )
}

export default Music