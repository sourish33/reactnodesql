import styles from './App.module.css'
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';
import {Route, Routes, useNavigate} from 'react-router-dom'


function App() {

  const navigate = useNavigate()

  const navigateToAdd = () =>{
    navigate("/add")
  }

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element = {<DataTable/>}/>
        <Route path="/add" element = {<FormElement/>}/>
      </Routes>
    </div>
  );
}

export default App;
