import React, { useState, useEffect } from 'react';
import { View } from './components/View';
import './App.css';

const getData = () => {
  const data = localStorage.getItem('student');
  if(data) {
    return JSON.parse(data);
  }
  else {
    return [];
  }
}

export const App = () => {
  
  const[student,setStudent] = useState(getData());

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[website, setWebsite] = useState('');
  const[image, setImage] = useState('');
  const[gender, setGender] = useState('');
  const[skills, setSkills] = useState([]);

  const setValue = (e) => {
    const value = e.target.value;
    if(skills.includes(value)){
    let newSkills = skills.filter((val) => val !== value);
    setSkills([...newSkills]);
    }
    else{
    setSkills([...skills,value]);
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const students = {
      name,email,website,image,gender,skills
    } 
    setStudent([...student,students]);
    setName('');
    setEmail('');
    setWebsite('');
    setImage('');
    setGender('');
    setSkills([]);
    resetForm();
  };

  const resetForm = () => {
    document.getElementById("HTML").checked=false;
    document.getElementById("CSS").checked=false;
    document.getElementById("JavaScript").checked=false;
    document.getElementById("female").checked=false;
    document.getElementById("male").checked=false;
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("website").value="";
    document.getElementById("image").value="";
  }

  const deleteData = (name) => {
    const filtered = student.filter((element,index)=>{
      return element.name !== name
    })
    setStudent(filtered);
  }

  useEffect( () => {
    localStorage.setItem('student',JSON.stringify(student));
  },[student] )

  return (
    <div className="contain">
      <h1>Student enrollment form</h1>
      <div className='main'>
      <div className='form-container'>
      <form id="myform" onSubmit={handleSubmit}>
      <div className='form-group row'>
      <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
      <div className='col-sm-10'>
      <input className='form-control' onChange={(e) => setName(e.target.value)} value={name} type="text" id='name' name='name' autoComplete="off"/>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <label htmlFor='email' className='col-sm-2 col-form-label'>Email</label>
      <div className='col-sm-10'>
      <input className='form-control' onChange={(e) => setEmail(e.target.value)} value={email} type="email" id='email' name='email' autoComplete="off"/>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <label htmlFor='website' className='col-sm-2 col-form-label'>Website</label>
      <div className='col-sm-10'>
      <input className='form-control' onChange={(e) => setWebsite(e.target.value)} value={website} type="text" id='website' name='website' autoComplete="off"/>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <label htmlFor='image' className='col-sm-2 col-form-label'>Image</label>
      <div className='col-sm-10'>
      <input className='form-control' onChange={(e) => setImage(e.target.value)} value={image} type="text" id='image' name='image' autoComplete="off"/>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <div className='col-sm-2'>Gender</div>
      <div className='col-sm-10'>
      <div className='form-check'>
      <input className='form-check-input' type="radio" name="gender" value="Female" id='female' onChange={(e) => setGender(e.target.value)}/>
      <label htmlFor='female' className='form-check-label'>Female</label>
      </div>
      <div className='form-check'>
      <input className='form-check-input' type="radio" name="gender" value="Male" id='male' onChange={(e) => setGender(e.target.value)}/>
      <label htmlFor='male' className='form-check-label'>Male</label>
      </div>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <div className='col-sm-2'>Skills</div>
      <div className='col-sm-10'>
      <div className='form-check'>
      <input className='form-check-input' type="checkbox" value="HTML" id='HTML' onChange={setValue}/>
      <label htmlFor='HTML' className='form-check-label'>HTML</label>
      </div>
      <div className='form-check'>
      <input className='form-check-input' type="checkbox" value="CSS" id='CSS' onChange={setValue}/>
      <label htmlFor='CSS' className='form-check-label'>CSS</label>
      </div>
      <div className='form-check'>
      <input className='form-check-input' type="checkbox" value="JavaScript" id='JavaScript' onChange={setValue}/>
      <label htmlFor='JavaScript' className='form-check-label'>JavaScript</label>
      </div>
      </div>
      </div>
      <br/>
      <div className='form-group row'>
      <div className='col-sm-2'></div>
      <div className='col-sm-10'>
      <button className='btn btn-success' type="submit">Enroll</button>
      <span> </span>
      <button className='btn btn-danger' type="button" onClick={resetForm}>Clear</button>
      </div>
      </div>
      </form>
      </div>
      <div className='view-container'>
      {student.length>0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Details</th>
                    <th>Photo</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View student={student} deleteData={deleteData}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger' onClick={ () => setStudent([])}>Remove All</button>
        </>}
      {student.length < 1 && <div> Add records </div>}
      </div>
      </div>
    </div>
  );
}

export default App;
