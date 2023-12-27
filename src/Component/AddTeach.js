import React, { useState } from "react";
import TBase from "../Base/TBase";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const AddTeach = ({Teacher,setTeacher}) => {
    const history = useHistory();

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [JoiningDate, setJoiningDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [BatchAssigned, setBatchAssigned] = useState("");

    const createTeacher = async () =>{
        const newTeacher = {
            FirstName,
            LastName,
            JoiningDate,
            PhoneNumber,
            BatchAssigned
        }
        const response = await fetch("https://mentor-studentbackend-connection.onrender.com/mentors",{
          method:"POST",
          body: JSON.stringify(newTeacher),
          headers :{
            "Content-Type":"application/json"
          },
        })
        const teachdata = response.json()
        setTeacher([...Teacher, teachdata])
        history.push("/techerslist");
    }
   
  return (
    <TBase>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-search" label="First Name" type="text" 
          value={FirstName}
            onChange={(e)=>setFirstName(e.target.value)}
          />
        </div>
        <div>
        <TextField id="outlined-search" label="Last Name" type="text" 
        value={LastName}
        onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
        <TextField id="outlined-search" label="Join Date" type="text"
        value={JoiningDate}
        onChange={(e) => setJoiningDate(e.target.value)}
          />
        </div>
        <div>
        <TextField id="outlined-search" label="PhoneNumber" type="text"
        value={PhoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        />
        </div>
        <div>
        <TextField id="outlined-search" label="BatchAssigned" type="text"
        value={BatchAssigned}
        onChange={(e) => setBatchAssigned(e.target.value)}
        />
        </div>
        <div>
        <Button 
          onClick={createTeacher}
          size="large"  variant="contained" >Add</Button>
        </div>
      </Box>
    </TBase>
  );
};

export default AddTeach;
