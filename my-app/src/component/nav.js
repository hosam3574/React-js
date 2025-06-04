/*import { useLayoutEffect } from "react"
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
*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import  { Link } from "react-router-dom"
import '../css/nav.css'


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='navLink' to='/'>Home</Link>
          </Typography>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className='navLink' to = '/about'> About</Link>
          </Typography>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className='navLink' to ='/m'> Menu</Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
