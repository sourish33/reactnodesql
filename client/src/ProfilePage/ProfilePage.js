import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../App';

const ProfilePage = () => {

    const {id} = useParams()
    const [formData, setFormData] = useState({})
    const {navigateToEdit} = React.useContext(UserContext)

    useEffect(()=>{
        const fetchData = async () => {
            const data = await fetch(`http://localhost:3001/user/${id}`)
            const [datajson,] = await data.json()
            setFormData(datajson)
        }
        fetchData().catch(console.error)
  
    },[])

    const {image, fname, lname, age, job_title, salary, bio} = formData
    const salaryFormatted = Number(salary).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })

    return (
        <div className="row">
            <div className="col-sm-6">
            <div className="mt-4">
                <Card>
                    <Card.Img variant="top" src={image} />
                </Card>
            </div>
            </div>
            <div className="col-sm-6">
            <div className="mt-4">
                <Card>
                    <Card.Body>
                        <Card.Title>{`${fname} ${lname}`}</Card.Title>
                        <Card.Subtitle>{job_title}</Card.Subtitle>
                        <Card.Text>
                            <br/>
                            Age: {age}
                            <br/><br/>
                            Salary: {salaryFormatted}
                            <br/><br/>
                            {bio}
                            <br/><br/>
                            <button className='btn btn-primary' onClick={()=>{navigateToEdit(id)}}>Edit Profile</button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )

}
export default ProfilePage
