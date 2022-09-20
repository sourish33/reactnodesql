import React from 'react';
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavigationBar from './Navbar/NavigationBar';

export const UserContext = React.createContext();


function App() {

  const navigate = useNavigate()

  const navigateToAdd = () =>{
    navigate("/add")
  }

  const navigateToHome = () =>{
    navigate("/")
  }

  return (
    <UserContext.Provider value={{navigateToAdd, navigateToHome}}>
      <NavigationBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element = {<DataTable/>}/>
        <Route path="/add" element = {<FormElement/>}/>
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
