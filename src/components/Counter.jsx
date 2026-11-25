import {useState} from "react";


export function Counter(){
    const [count,setCount] = useState(99)

    function handleBtnClick(){
        setCount(count+56)
}
   return (
       <>
       <div className="container">
           <div className="row">
               <div className="col-4">
                   <h2 className="text-center">Counter</h2>
                   <h1 className="text-center">{count}</h1>
                   <button onClick={handleBtnClick} className="btn btn-success w-100">Click Me</button>
               </div>
           </div>
       </div>
       </>
   )
}