import React, { useEffect, useState } from 'react'
import TBase from '../Base/TBase'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from 'react-router-dom';

const UpdateTeach = ({Teacher,setTeacher}) => {
    const history = useHistory();
    const {id} = useParams();
    const updateTeach = Teacher[id]
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [JoiningDate, setJoiningDate] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [BatchAssigned, setBatchAssigned] = useState("");

    useEffect(()=>{
        setFirstName(updateTeach.FirstName)
        setLastName(updateTeach.LastName)
        setJoiningDate(updateTeach.JoiningDate)
        setPhoneNumber(updateTeach.PhoneNumber)
        setBatchAssigned(updateTeach.BatchAssigned)
    },[updateTeach])

        const updateTeacher = async () =>{
            const TeachObj = {
                FirstName,
                LastName,
                JoiningDate,
                PhoneNumber,
                BatchAssigned
            }

            const response = await fetch(`https://646366317a9eead6fae5ab94.mockapi.io/Teacher/${updateTeach.id}`,{
              method:"PUT",
              body:JSON.stringify(TeachObj),
              headers:{
                "Content-Type":"application/json"
              }
            })
            const teachdata = response.json()
            if(teachdata){
              console.log(TeachObj);
              Teacher[id] = TeachObj;
              setTeacher([...Teacher]);
              history.push("/techerslist")
            }
            
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
           onClick={updateTeacher}
          size="large"  variant="contained" >Update</Button>
        </div>
      </Box>
    </TBase>
  )
}

export default UpdateTeach
