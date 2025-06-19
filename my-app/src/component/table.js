import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

export default function ColumnGroupingTable() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    
 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 const [firstName, setfirstName] = useState('');
  const [lasttName, setlasttName] = useState('');
const [age, setAge] = useState('');
const [userData, setuserData] = useState([  
  {id:1,firstName:"mohsmmf",lasttName:"kgjf",age:44},
  {id:2,firstName:"ali",lasttName:"kgjf",age:44},
  {id:3,firstName:"morad",lasttName:"kgjf",age:44},
  {id:4,firstName:"new",lasttName:"kgjf",age:44},
]);



  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };





  /*export default function DataTable(){
    const[ useDatat ,setUserData ]=useState([
      
    ])
  }*/



  
  return (
    <Paper sx={{ width: '100%' }}>
 
      


<form onSubmit={(event)=>{

  event.preventDefault();
console.log("first name",firstName );
console.log("last name",lasttName);
console.log("age ",age);
console.log(userData.length);


var highestId =0;
for(let i=0; i<userData.length;i++){

  console.log ("userData[i].id",userData[i].id)

  if( userData [i].id>=highestId){

    highestId=userData[i].id+1;
    console .log ("highest Id ",highestId);
  }


  
}
let newId = 1;
let exists = true;

for (let i = 1; ; i++) {
  exists = false;

  for (let j = 0; j < userData.length; j++) {
    if (userData[j].id === i) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    newId = i;
    break;
  }
}

console.log("New available ID:", newId);



setuserData([...userData, { id:newId,firstName:firstName,lasttName:lasttName,age:age}])






} }>




  <input  onChange={(event)=>{
    setfirstName(event.target.value)
  }}
   placeholder='first name'/>



 <input   onChange={(event)=>{
    setlasttName(event.target.value)
  }}
 placeholder='last name'/>


 <input onChange={(event)=>{
    setAge(event.target.value)
  }}                       type='Number' placeholder='age'/>


 <input type="submit"/>

</form>





      <table border={1}>

      <thead>
<tr> 
  <td>
ID 
  </td>


 
  <td>
First Name 
  </td>




  <td>
Last Name 
  </td>

 <td>
age 
  </td>


  <td>
    Delete
  </td>
  <td>
    Update
  </td>

</tr>

      </thead>

<tbody>

{userData.map((user,index)=>{
return(

<tr>  
  <td>  
    {user.id}
    </td> 

<td>  
    {user.firstName}
    </td> 

    <td>  
    {user.lasttName}
    </td> 
<td>  
    {user.age}
    </td> 



    <td>

      <Button onClick={()=>{

   if(
         window.confirm("Are You Suer you Want delete this user ?")){
          
          console.log("the user want to delete the row")
          console.log("user id",user.id)

         const newUserData=userData.filter((item)=>{
          
          return item.id !==user.id;

         })

         console.log(newUserData);
         setuserData( newUserData);

         }
else{
  console.log("the user dont want to delete the row")
}
      }

      } >

Delete
        </Button>

    </td>





    <Button onClick={()=>{

setfirstName(user.firstName);
setlasttName( user.lasttName);
setAge(user.age);

  handleOpen();
    }}>
    

Update
        </Button>

     <td>

     </td>



    
     </tr>

)


})}



</tbody>


    


      </table>

 <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={(event)=>{

  event.preventDefault();
console.log("first name",firstName );
console.log("last name",lasttName);
console.log("age ",age);
console.log(userData.length);


var highestId =0;
for(let i=0; i<userData.length;i++){

  console.log ("userData[i].id",userData[i].id)

  if( userData [i].id>=highestId){

    highestId=userData[i].id+1;
    console .log ("highest Id ",highestId);
  }


  
}
let newId = 1;
let exists = true;

for (let i = 1; ; i++) {
  exists = false;

  for (let j = 0; j < userData.length; j++) {
    if (userData[j].id === i) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    newId = i;
    break;
  }
}

console.log("New available ID:", newId);



setuserData([...userData, { id:newId,firstName:firstName,lasttName:lasttName,age:age}])






} }>




  <input value={firstName}  onChange={(event)=>{
    setfirstName(event.target.value)
  }}
   placeholder='first name'/>



 <input value={lasttName}   onChange={(event)=>{
    setlasttName(event.target.value)
  }}
 placeholder='last name'/>


 <input value={age} onChange={(event)=>{
    setAge(event.target.value)
  }}                       type='Number' placeholder='age'/>


 <input type="submit"/>

</form>

        </Box>
      </Modal>
    </div>


        
    </Paper>
  );
}
