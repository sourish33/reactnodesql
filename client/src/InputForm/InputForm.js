import React from 'react'
import Alert from 'react-bootstrap/Alert';

const InputForm = ({formData, handleChange, handleClick, alert, setAlert}) => {
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

export default InputForm