import React, { useState } from "react"
// import styles from "./FormElement.module.css"

function FormElement() {
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

    const handleClick = (e) => {
        e.preventDefault()
        const data = `${formData.fname} ${formData.lname}, aged ${formData.age} works as ${formData.job_title} and makes $${formData.salary}/year`
        alert(data)
    }

    

    return (

        <div className="row">
            <form className="mt-4 ml-0">
                    <h2>Enter Employee Data</h2>
                        <div className="col-lg-6">
                            <label for='fname' className="form-label">First Name:</label>
                            <input
                                type="text"
                                name="fname"
                                className="form-control"
                                value={formData.fname}
                                onChange={(e) =>
                                    handleChange(e)
                                }>
                            </input>
            
                            <label for='lname' className="form-label">Last Name:</label>
                            <input
                                type="text"
                                name="lname"
                                className="form-control"
                                value={formData.lname}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label for='age' className="form-label">Age:</label>
                            <input
                                type="number"
                                name="age"
                                className="form-control"
                                value={formData.age}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label for='job_title' className="form-label">Job Title:</label>
                            <input
                                type="text"
                                name="job_title"
                                className="form-control"
                                value={formData.job_title}
                                onChange={(e) =>
                                    handleChange(e)
                                }
                            ></input>
                            <label for='salary' className="form-label">Salary:</label>
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
        </div>
    )
}

export default FormElement
