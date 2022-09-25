import React from 'react';
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavigationBar from './Navbar/NavigationBar';
import FormElementEdit from './FormElement/FormElementEdit';
import CardItem from './CardItem/CardItem';
import ProfilePage from './ProfilePage/ProfilePage';

export const UserContext = React.createContext();


function App() {

  const navigate = useNavigate()

  const navigateToAdd = (e) =>{
    e.preventDefault()
    navigate("/add")
  }

  const navigateToHome = (e) =>{
    e.preventDefault();
    navigate("/")
  }

  const navigateToEdit = (id) =>{
    navigate(`/edit/${id}`)
  }

  const navigateToView = (id) =>{
    navigate(`/view/${id}`)
  }

  return (
    <UserContext.Provider value={{navigateToAdd, navigateToHome, navigateToEdit, navigateToView}}>
      <NavigationBar/>
    <div className='container'>
      <Routes>
        <Route path="/" element = {<DataTable/>}/>
        <Route path="/add" element = {<FormElement/>}/>
        <Route path="/edit/:id" element ={<FormElementEdit/>}/>
        <Route path="/view/:id" element ={<ProfilePage/>}/>
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
