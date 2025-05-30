import { useLayoutEffect } from "react"
import '../css/nav.css'
import { Link } from "react-router-dom"

export default function Nav ( ){


    return(
        <div className ='nav' >
        <ul>
            
           <li> <Link to='/'>Home</Link> </li>
           

 <li>   <Link to = '/about'> About</Link>
            </li>
           

            <li>
                Contant
            </li>



            <li>
                <Link to ='/m'> Menu</Link>
            </li>

        </ul>


        </div>



      
    )

}


