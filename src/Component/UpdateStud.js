import React, { useEffect, useState } from 'react'
import Base from '../Base/Base'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const EditStud = ({Student,setStudent}) => {
 const history = useHistory();

  const {id} = useParams()
   const editStudent = Student[id]
  const [name, setName] = useState("");
  const[gender, setGender] = useState("");
  const[qualification, setQualification] = useState("");

  useEffect(()=>{
    setName(editStudent.name)
    setGender(editStudent.gender)
    setQualification(editStudent.qualification)
  },[editStudent])

  async function updatestudent(){
    const updatedObj = {
      name:name,
     gender: gender,
     qualification: qualification
    }

    const response = await fetch(`https://646366317a9eead6fae5ab94.mockapi.io/Student/${editStudent.id}`,{
      method:"PUT",
      body:JSON.stringify(updatedObj),
      headers:{
        "Content-Type":"application/json"
      }
    });
    const data = response.json()
    if(data){
      console.log(updatedObj);
      Student[id] = updatedObj;
      setStudent([...Student]);
      history.push("/studentlist");
    }
   
  }

  return (
    <Base>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-search" label="Enter Name" type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
        <TextField id="outlined-search" label="Gender" type="text" 
          value={gender}
          onChange={(e)=>setGender(e.target.value)}
          />
        </div>
        <div>
        <TextField id="outlined-search" label="Qualification" type="text"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          />
        </div>
        <div>
        <Button 
          onClick={updatestudent}
          size="large"  variant="contained">Update</Button>
        </div>
      </Box>
    </Base>
  )
}

export default EditStud
