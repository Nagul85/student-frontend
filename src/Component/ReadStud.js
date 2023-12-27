import Base from "../Base/Base";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const ReadStud = ({Student, setStudent}) => {
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem("token")){
      history.push("/login")
    }
  })
  
  const deleteStudent = async (studId)=>{
    const response = await fetch(`https://mentor-studentbackend-connection.onrender.com/Student/${studId}`,{
      method:"DELETE",
    });
    const data = await response.json()
    if(data){
      const reminingStudent = Student.filter((stud, idx) => stud.id !== studId);
    setStudent(reminingStudent);
    }
    
  }

  return (
    <Base title={"Student Detail"} description={"Read Students Details here"}>
       <div className="maincard">{console.log(Student)}
      {Student.map((stud, idx) => (
          <Card style={{ width: "50%", marginLeft: "21%" }} key={idx}>
            <CardContent>
              <Typography variant="h5" component="div">
                {stud.name}
              </Typography>
              <Typography variant="body2">{stud.gender}</Typography>
              <Typography variant="body2">{stud.qualification}</Typography>
            </CardContent>
            <CardActions>
              <Button 
              onClick={()=>history.push(`/update/${stud.id}`)}
              size="small">Edit</Button>
              <Button 
              onClick={()=>deleteStudent(stud.id)}
              size="small">Delete</Button>
            </CardActions>
          </Card>
        
      ))}
      </div>
    </Base>
  );
};

export default ReadStud;
