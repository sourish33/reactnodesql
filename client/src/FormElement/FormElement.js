import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert';
// import styles from "./FormElement.module.css"

function FormElement() {
    const [alert, setAlert] = useState({visible: false, type: "primary", text: "Database updated"})
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: 0,
        job_title: "",
        salary: 0,
    })

    const handleChange = (e) => {
        const nam = e.target.name
        const value = e.target.value
        const updatedFormData = { ...formData }
        updatedFormData[nam] = value
        setFormData(updatedFormData)
    }

    const handleClick = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch('http://localhost:3001/user', requestOptions)
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson ? await response.json() : null;
            if (!response.ok) {
                throw new Error("Bad response")
            }
            if(data && data.affectedRows>=1){
                setAlert(x=> {return {...x, visible: true, type: "primary", text: `Database updated with ${data.affectedRows} record`}})
            } else{
                throw new Error("No data recieved or updates unsuccessful")
            }
            
        } catch (error) {
            setAlert(x=> {return {...x, visible: true, type: "danger", text: error}})
        }

        
    }

    

    return (

        <div className="row">
            <form className="mt-4 ml-0">
                    <h2>Enter Employee Data</h2>
                        <div className="col-lg-6">
                            <label htmlFor='fname' className="form-label">First Name:</label>
                            <input
                                type="text"
                                name="fname"
                                className="form-control"
                                value={formData.fname}
                                onChange={(e) =>
                                    handleChange(e)
                                }>
                            </input>
            
                            <label htmlFor='lname' className="form-label">Last Name:</label>
                            <input
                                type="text"
                                name="lname"
                                className="form-control"
                                value={formData.lname}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label htmlFor='age' className="form-label">Age:</label>
                            <input
                                type="number"
                                name="age"
                                className="form-control"
                                value={formData.age}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label htmlFor='job_title' className="form-label">Job Title:</label>
                            <input
                                type="text"
                                name="job_title"
                                className="form-control"
                                value={formData.job_title}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label htmlFor='salary' className="form-label">Salary:</label>
                            <input
                                type="number"
                                name="salary"
                                className="form-control"
                                value={formData.salary}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                        </div>
            
                    <div><button type="button" className="btn btn-primary mt-2" onClick={handleClick}>Submit</button></div>
                </form>
                <Alert variant={alert.type} className="mt-2 col-lg-6" show={alert.visible} onClose={() => setAlert(x=>{return {...x, visible: false} })} dismissible>
                        {alert.text}
                </Alert>
        </div>
    )
}

export default FormElement
