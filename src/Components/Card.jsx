import React from "react";

const data = [
    {image:'https://picsum.photos/id/237/600/400', title:'Dogs', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi' ,instock: false},
    {image:'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww', title:'Cats', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, omnis?', instock: true},
    {image:'https://plus.unsplash.com/premium_photo-1675847898301-4bbcbf5448a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title:'Birds', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, mkkmmjmmomnis?', instock: false} 
]
function Card() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
       {data.map((elem, index) => (
        <div key={index} className='w-64 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full object-cover'>
          <img src={elem.image} alt='Placeholder' />
        </div>
        <div className='w-full px-3 py-4'>
          <h2 className='font-semibold'>{elem.title}</h2>
          <p className='text-xs mt-3'> {elem.description}</p>
          <button className={`px-4 py-1 rounded ${elem.instock ? "bg-blue-600":"bg-red-600"} mt-3 text-xs`}>
            {elem.instock ? "In stock" : "Out of stock"}
          </button>
        </div>
        </div>
       )) }
    </div>
  )
}

export default Card