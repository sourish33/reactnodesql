import React from 'react'
import styles from './DataTable.module.css'

const DataTable = () => {

  const data = [
            {id: 1,
            fname: "Sacha",
            lname: "LittleFeather",
            age: 31,
            job_title: "Copy writer",
            salary: 37221
        },

        {id: 2,
            fname: "Sonam",
            lname: "Malvia",
            age: 32,
            job_title: "Copy reader",
            salary: 40051
        },
        {id: 3,
            fname: "Gulab",
            lname: "Golgappa",
            age: 38,
            job_title: "Copy writer",
            salary: 37552
        }
  ]



const tableData = data.map(el => {
    return(
        <tr key={el.id}>
            <td>{el.fname}</td>
            <td>{el.lname}</td>
            <td>{el.age}</td>
            <td>{el["job_title"]}</td>
            <td>{el.salary}</td>
            <td><button>Edit</button><button>Delete</button><button>View</button></td>
        </tr>
    )
})

  return (
    <>
        <h1>Employee Data</h1>
        <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Job Title</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
        {tableData}
        </table>
        <button className={styles.addbutton}> Add Employee</button>
    </>
  )
}

export default DataTable