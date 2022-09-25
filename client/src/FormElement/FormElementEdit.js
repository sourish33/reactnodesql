import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import InputForm from "../InputForm/InputForm";
// import styles from "./FormElement.module.css"

const FormElementEdit = () => {

    const {id} = useParams()
    console.log(id)

    const [alert, setAlert] = useState({visible: false, type: "primary", text: "Database updated"})
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        age: 0,
        job_title: "",
        salary: 0,
    })

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch(`http://localhost:3001/user/${id}`)
            const [datajson,] = await data.json()
            console.log(datajson)
            // setFormData((x) => [...datajson])
            setFormData(datajson)
        }
        fetchData().catch(console.error)

    },[])

    const handleChange = (e) => {
        const nam = e.target.name
        const value = e.target.value
        const updatedFormData = { ...formData }
        updatedFormData[nam] = value
        setFormData(updatedFormData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }

        const putData = async () =>{
                const response = await fetch(`http://localhost:3001/user/${id}`, requestOptions)
                if (!response || !response.ok) {
                    throw new Error("Bad response")
                }
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;

                if(data && data.affectedRows>=1){
                    setAlert(x=> {return {...x, visible: true, type: "primary", text: `Your changes have been recorded.`}})
                    setTimeout(()=>{
                        setAlert(x=> {return {...x, visible: false}})
                    }, 1000)
                } else{
                    throw new Error("No data recieved or updates unsuccessful")
                }
            }
        putData().catch(err=>{
            setAlert(x=> {return {...x, visible: true, type: "danger", text: `${err}`}})
        })
            
    }

    

    return (
        <InputForm 
        formData={formData}
        handleChange={handleChange}
        handleSubmit = {handleSubmit}
        alert ={alert}
        setAlert ={setAlert}
        />
    )
}

export default FormElementEdit


        
        
        
        

