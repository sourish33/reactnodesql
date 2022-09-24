import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert';
import InputForm from "../InputForm/InputForm";
// import styles from "./FormElement.module.css"

const FormElementEdit = () => {

    //TODO useEffect to set initial form data

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

        const postData = async () =>{
                const response = await fetch('http://localhost:3001/user', requestOptions)
                if (!response || !response.ok) {
                    throw new Error("Bad response")
                }
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;

                if(data && data.affectedRows>=1){
                    setAlert(x=> {return {...x, visible: true, type: "primary", text: `Database updated with ${data.affectedRows} record`}})
                    setFormData({
                        fname: "",
                        lname: "",
                        age: "",
                        job_title: "",
                        salary: "",
                    })
                    setTimeout(()=>{
                        setAlert(x=> {return {...x, visible: false}})
                    }, 1000)
                } else{
                    throw new Error("No data recieved or updates unsuccessful")
                }
            }
        postData().catch(err=>{
            setAlert(x=> {return {...x, visible: true, type: "danger", text: `${err}`}})
        })
            
    }

    

    return (
        <InputForm 
        formData={formData}
        handleChange={handleChange}
        handleClick = {handleClick}
        alert ={alert}
        setAlert ={setAlert}
        />
    )
}

export default FormElementEdit


        
        
        
        

