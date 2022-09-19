import React, { useState } from "react"
import Button from "../Button/Button"
import styles from "./FormElement.module.css"

function FormElement() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: 0,
        jobtitle: "",
        salary: 0,
    })

    const handleChange = (nam, value) => {
        const updatedFormData = { ...formData }
        updatedFormData[nam] = value
        setFormData(updatedFormData)
    }

    const handleClick = (e) => {
        e.preventDefault()
        const data = `${formData.fname} ${formData.lname}, aged ${formData.age} works as ${formData.jobtitle} and makes $${formData.salary}/year`
        alert(data)
    }

    

    return (
        <div>
            <h1>Employee Data Entry</h1>
            <form className={styles.formholder}>
                <h2>Enter Employee Data</h2>
                <label>First Name:</label>
                <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                ></input>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                ></input>
                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                ></input>
                <label>Job Title:</label>
                <input
                    type="text"
                    name="jobtitle"
                    value={formData.jobtitle}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                ></input>
                <label>Salary:</label>
                <input
                    type="number"
                    name="salary"
                    value={formData.salary}
                    onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                    }
                ></input>
                <Button type={'green'} clickAction={handleClick}>
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default FormElement
