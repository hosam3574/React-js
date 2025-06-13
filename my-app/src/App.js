import logo from './logo.svg';
import './App.css';
import Nav from './component/nav'
import Home from './component/home'
import About from './component/about'
import Footer from './component/footer'
import Menu from './component/menu' 
import {BrowserRouter, Route,Routes }from 'react-router-dom'
import DataTable from './component/table';




function App() {
  return (
     
    <BrowserRouter>
    
    <Nav/>
    <Routes>


     <Route path='/' element = {<Home/>}/> 

     <Route path='/table' element = {<DataTable/>}/> 



      <Route path='/about' element = {<About/>}/>
      <Route path='/m' element ={ <Menu/>}/>

</Routes>



<Footer>





</Footer>
    
    
    </BrowserRouter>



    
  );
}

export default App;



