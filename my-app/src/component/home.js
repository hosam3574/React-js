import {useState }from "react"

export default function Home ( ){

const[data,setData]=useState ([
    {Name : "Hosam" , age : 20 },
 {Name : "Mouyyad" , age : 20 },
 {Name : "Ali" , age : 20 }
    ]);
return(

    <div className="Home">
<h1> My Name</h1>
{data.map((item,index)=>(

    <h1>
        {index+1}:{item.name}and{item.age}
    </h1>
))}

    </div>
)



}