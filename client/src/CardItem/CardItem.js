import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';

const CardItem = () => {

  const {id} = useParams()
  const [formData, setFormData] = useState({})
  const { navigateToAdd,  navigateToEdit, navigateToView} = React.useContext(UserContext)

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
    <div className='d-flex justify-content-center mt-4'>
        <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{`${fname} ${lname}`}</Card.Title>
            <Card.Text>
                    {bio}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Age: {age}</ListGroup.Item>
            <ListGroup.Item>Job Title: {job_title}</ListGroup.Item>
            <ListGroup.Item>Salary: {salaryFormatted}</ListGroup.Item>
          </ListGroup>
        </Card>
    </div>
  );
}

export default CardItem;