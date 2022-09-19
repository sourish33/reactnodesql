import React from "react"
import Button from "../Button/Button"
import styles from "./DataTable.module.css"

const data = [
    {
        id: 1,
        fname: "Sacha",
        lname: "LittleFeather",
        age: 31,
        job_title: "Copy writer",
        salary: 37221,
    },

    {
        id: 2,
        fname: "Sonam",
        lname: "Malvia",
        age: 32,
        job_title: "Copy reader",
        salary: 40051,
    },
    {
        id: 3,
        fname: "Gulab",
        lname: "Golgappa",
        age: 38,
        job_title: "Copy writer",
        salary: 37552,
    },
]

const DataTable = () => {
    const handleClick = () => {
        window.alert("Hello")
    }

    const tableData = data.map((el) => {
        return (
            <tr key={el.id}>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
                <td>{el.age}</td>
                <td>{el["job_title"]}</td>
                <td>{el.salary}</td>
                <td>
                    <Button type={"blue"} clickAction={handleClick}>
                        Edit
                    </Button>
                    <Button type={"red"} clickAction={handleClick}>
                        Delete
                    </Button>
                    <Button type={"green"} clickAction={handleClick}>
                        View
                    </Button>
                </td>
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
            <Button type={"blue"} clickAction={handleClick}>
                Add Employee
            </Button>
        </>
    )
}

export default DataTable
