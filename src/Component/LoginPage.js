import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Base from "../Base/Base";
import { Password } from "@mui/icons-material";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();
 
    const hangleLogin = async() => {
        const userInfo = {
            email,
            password,
        }
        const res = await fetch(`https://mentor-studentbackend-connection.onrender.com/users/login/`,{
            method :"POST",
            body : JSON.stringify(userInfo),
            headers:{
                "content-Type":"application/json"
            }
        });
        const data = await res.json();
        localStorage.setItem("token", data.data.token)
        // console.log(data.data.token);
       history.push("/studentlist")
    }
    return (
    <Base
    title = {"Login Page"}
    description={"Please login to continue"}
    >
    <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 3, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField 
          label="Enter Email" 
          id="outlined-search" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <TextField 
          id="outlined-search" 
          label="Enter Password" 
          type="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          /> 
        </div>
        <div>
          <Button 
          size="large" 
          variant="contained"
          type="submit"
          onClick={hangleLogin}
          >
            Login
          </Button>
        </div>
      </Box>
      </Base>
  );
}

export default LoginPage;
