import {useRef} from "react";

export default function RefNew() {
const inputRef=useRef();

const usernameRef=useRef();
const emailRef=useRef();
const passwordRef=useRef();
const [errors, setErrors]=useRef();
const handelsumbit=()=>{
    console.log("this is sumbit")
    const username=usernameRef.current.value;
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    const newErrors={}
    if(username.length<5){
        newErrors.username="Username must be at 5 lesat cah long"
    }

if(password.length<8){
        newErrors.password="Username must be at 8 lesat cah long"
    }

if(email.includes("@")){
        newErrors.email="email must be at lesat @"
    }
    setErrors(newErrors);
    if(newErrors.username){
        newErrors.current.fcous()
    }
    setErrors(email);
    if(newErrors.username){
        emailRef.current.fcous()
    }
setErrors(password);
    if(newErrors.username){
        passwordRef.current.fcous()
    }
console.log("username",username)
}




return(
<div>
    
<form onSubmit={(e)=>{

e.preventDefault();
handelsumbit();

}}>


<label>
    Username:
</label>
<input type="text" ref={usernameRef}/>
{errors.username&&<p style={{color:"red"}}>{errors.username}</p>}
<br></br>

<label>
    Email:
</label>
<input type="email" ref={emailRef}/>
{errors.username&&<p style={{color:"red"}}>{errors.email}</p>}
<br></br>

<label>
    password:
</label>
<input type="text" ref={passwordRef}/>
{errors.password&&<p style={{color:"red"}}>{errors.password}</p>}
<br></br>


</form>

<input type="sumbit"> </input>




</div>

)


}
