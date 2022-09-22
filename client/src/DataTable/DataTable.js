import React, { useEffect, useState } from "react"
import { UserContext } from "../App"

const DataTable = () => {
    const {navigateToAdd} = React.useContext(UserContext)

    const [data, setData] = useState([])

    const handleDelete = (id) =>{
        ///////TODO
        alert(`Are you sure you want to delete record id=${id}?`)
    }

    useEffect(()=>{
        const fetchData = async () =>{
            const data = await fetch('http://localhost:3001/users')
            const datajson = await data.json()
            setData(x=>[...x, ...datajson])
        }
        fetchData().catch(console.error)
    }, [])

    const tableData = data.map((el) => {
        return (
            <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
                <td>{el.age}</td>
                <td>{el["job_title"]}</td>
                <td>{Number(el.salary).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
                <td className="d-flex justify-content-center">
                    <div className="btn-toolbar">
                        <button type="button" className="btn btn-primary mx-1 my-1">
                            View
                        </button>
                        <button type="button" className="btn btn-secondary mx-1 my-1">
                            Edit
                        </button>
                        <button type="button" className="btn btn-danger mx-1 my-1" onClick={()=>handleDelete(el.id)}>
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
                <tbody>
                    {tableData}
                </tbody>
                
            </table>
            <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary mx-2" onClick={navigateToAdd}>Add Employee</button>
            </div>
        </>
    )
}

export default DataTable
