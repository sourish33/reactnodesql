import React from "react"
import { UserContext } from "../App"

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
    const {navigateToAdd} = React.useContext(UserContext)
    const handleClick = () => {
        window.alert("Hello")
    }

    const tableData = data.map((el) => {
        return (
            <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
                <td>{el.age}</td>
                <td>{el["job_title"]}</td>
                <td>{el.salary}</td>
                <td className="d-flex justify-content-center">
                    <div className="btn-toolbar">
                        <button type="button" className="btn btn-primary mx-1 my-1">
                            View
                        </button>
                        <button type="button" className="btn btn-secondary mx-1 my-1">
                            Edit
                        </button>
                        <button type="button" className="btn btn-danger mx-1 my-1">
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <> 
            <table className="table table-bordered border border-2 table-striped mt-4 ml-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Job Title</th>
                        <th scope="col">Salary</th>
                        <th scope="col" className="d-flex justify-content-around">Actions</th>
                    </tr>
                </thead>
                {tableData}
            </table>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary mx-2" onClick={navigateToAdd}>Add Employee</button>
            </div>
        </>
    )
}

export default DataTable
