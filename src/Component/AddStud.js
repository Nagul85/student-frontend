import React, { useState } from "react";
import Base from "../Base/Base";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";


const AddStud = ({Student,setStudent}) => {
    const history = useHistory();

    const [name, setName] = useState("");
    const[gender, setGender] = useState("");
    const[qualification, setQualification] = useState("");

    const createStudent = async () => {
      const newStudent = {
        name,
        gender,
        qualification
    }
   
      const response = await fetch("https://mentor-studentbackend-connection.onrender.com/Student",{
        method:"POST",
        body:JSON.stringify(newStudent),
        headers :{
          "Content-Type":"application/json"
        },
      })
     
      const data = await response.json()
        setStudent([...Student, data]);
        console.log(newStudent);
        history.push("/studentlist")
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
          onClick={createStudent}
          size="large"  variant="contained" >Add</Button>
        </div>
      </Box>
    </Base>
  );
};

export default AddStud;
