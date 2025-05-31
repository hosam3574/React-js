export default function Greeating (props){

return(

    <div>
<h1>
Hello {props.name}and studant , My name Hosam 

</h1>

<p>
    {props.userOption}
</p>
{
    
    props.userOption===" WhoWeAre "?" my name hosam ":
 props.userOption==="whyChoseUs  "?" father Mouyyad  ":

 props.userOption===" value "?" grand Father Ahmad ":

 "pleas selcet any think"



}


    </div>





)





}