import styles from './App.module.css'
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';
import {Route, Routes} from 'react-router-dom'


function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <DataTable/>
      break
    case "/add":
      component = <FormElement/>
      break
    default:
      component = <DataTable/>
  }

  return (
    <div className={styles.container}>
      {component}
    </div>
  );
}

export default App;
