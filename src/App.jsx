import React , {useState} from 'react'
import Card from "./Components/Card";
import Music from "./Components/Music";


function App() {
  const [val,setVal] = useState({name : "adi" , banned : false});

  return (
    <div className='p-5'>
        <h3>name : {val.name}</h3>
        <h3>banned: {val.banned.toString()}</h3>
        <button onClick={()=>setVal({...val , banned : !val.banned})} className={`px-3 py-1 ${val.banned ? "bg-red-600" : "bg-blue-500"} mt-2 rounded-full `}>Click to change</button>
    </div>
  )
}


export default App