import React, { useEffect, useState } from "react"
import { UserContext } from "../App"
import Alert from 'react-bootstrap/Alert';
import styles from './DataTable.module.css'

const DataTable = () => {
    const { navigateToAdd,  navigateToEdit, navigateToView} = React.useContext(UserContext)

    const [data, setData] = useState([])
    const [alert, setAlert] = useState({visible: false, type: "primary", text: "Database updated"})

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/user/${id}`, { method: "DELETE" })
            .then(async (response) => {
                if (!response || !response.ok) {
                    throw new Error("Bad response")
                }
                setAlert(x=> {return {...x, visible: true, type: "danger", text: `Delete Successful!`}})
                setTimeout(()=>{
                    setAlert(x=> {return {...x, visible: false}})
                }, 1000)
            })
            .catch((err) => {
                setAlert(x=> {return {...x, visible: true, type: "danger", text: `${err}`}})
                console.error("There was an error!", err)
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:3001/users")
            const datajson = await data.json()
            setData((x) => [...datajson])
        }
        fetchData().catch(console.error)
    }, [alert])

    const tableData = data.map((el) => {
        return (
            <tr key={el.id}>
                <th scope="row">{el.id}</th>
                <td className="d-flex justify-content-center"><div className={styles.imgbox}><img src={`${el.image}`} alt="Mugshot" /></div></td>
                <td>{el.fname}</td>
                <td>{el.lname}</td>
                <td>{el.age}</td>
                <td>{el["job_title"]}</td>
                <td>
                    {Number(el.salary).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </td>
                <td className="d-flex justify-content-center">
                    <div className="btn-toolbar">
                        <button
                            type="button"
                            className="btn btn-primary mx-1 my-1"
                            onClick={() => navigateToView(el.id)}
                        >
                            View
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary mx-1 my-1"
                            onClick={() => navigateToEdit(el.id)}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger mx-1 my-1"
                            onClick={() => handleDelete(el.id)}
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        )
    })

    const sortByLastName = () => {
        window.alert("Sorting by last name!")
    }
    const sortByAge = () => {
        window.alert("Sorting by Age!")
    }
    const sortByJobTitle = () => {
        window.alert("Sorting by Job!")
    }
    const sortBySalary = () =>{
        window.alert("Sorting by Salary!")
    }

    const Sorter = ({handleSort}) =>{
        return (
            <span style={{cursor:"pointer"}} onClick={()=>{handleSort()}}>
                <i className="fa-solid fa-sort"></i>
            </span>
        )

    }

    return (
        <>
            <table className="table table-bordered border border-2  mt-4 ml-0">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name <Sorter handleSort = {sortByLastName} /> </th>
                        <th scope="col">Age <Sorter handleSort = {sortByAge} /></th>
                        <th scope="col">Job Title <Sorter handleSort = {sortByJobTitle} /></th>
                        <th scope="col">Salary <Sorter handleSort = {sortBySalary} /></th>
                        <th
                            scope="col"
                            className="d-flex justify-content-around"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>{tableData}</tbody>
            </table>
            <Alert variant={alert.type} className="mt-2" show={alert.visible} onClose={() => setAlert(x=>{return {...x, visible: false} })} dismissible>
                    {alert.text}
            </Alert>
        </>
    )
}

export default DataTable
