import React from 'react';
import styles from './App.module.css'
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Navigation from './Navbar/Navigation';

export const UserContext = React.createContext();


function App() {

  const navigate = useNavigate()

  const navigateToAdd = () =>{
    navigate("/add")
  }

  return (
    <UserContext.Provider value={navigateToAdd}>
      <Navigation/>
    <div className={styles.container}>
      <Routes>
        <Route path="/" element = {<DataTable/>}/>
        <Route path="/add" element = {<FormElement/>}/>
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
