import styles from './App.module.css'
import DataTable from './DataTable/DataTable';
import FormElement from './FormElement/FormElement';


function App() {
  return (
    <div className={styles.container}>
      <FormElement/>
      <DataTable/>
    </div>
  );
}

export default App;
