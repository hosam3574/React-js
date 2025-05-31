import Greeating from "./greeting"
import { useState } from "react"


export default function Menu (){
const[ selectendOption ,setSelectendOption]=useState("WhoWeAre")
const [ UserName,setUserName]=useState("MyName")

return(

<div>

<h1>
   About Menu 
</h1>

<p>
    This is the about page 
</p>


<input type="text"placeholder="Inter Your Name "
onChange={(event)=>{

console.log(event.target.value);
setUserName(event.target.value)


}


}


/>



<select onChange={(event)=>{

   console.log(event.target.value);

   setSelectendOption(event.target.value)


}   }>

    <option value=" WhoWeAre" > Who we are </option>

 <option value=" whyChoseUs" >  why Chose Us </option>

 <option value=" value" > Value  </option>


</select>

<Greeating   userOption={selectendOption} name={UserName}   />
</div>


)




}