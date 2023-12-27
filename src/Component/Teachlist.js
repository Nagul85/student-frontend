import React from "react";
import TBase from "../Base/TBase";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Teachlist = ({ Teacher, setTeacher }) => {
    const history = useHistory();

   async function deleteTeach(teachId){
    const response = await fetch(`https://mentor-studentbackend-connection.onrender.com/mentors/all/${teachId}`,
    {
      method:"DELETE",
    });
    const teachdata = response.json()
      if(teachdata){
        const reminingTeach = Teacher.filter((teach, idx) => teach.id !== teachId);
        setTeacher(reminingTeach);
        console.log(reminingTeach)
      }
        
    }

  return (
    <TBase title={"Teachers Detail"} description={"Teachers Details here"}>
        <div className="maincard">
      {Teacher.map((teach,idx) => (
        <Card style={{ width: "50%", marginLeft: "21%" }} key = {idx}>
          <CardContent>
            <Typography variant="h5" component="div">
              {teach.FirstName}
            </Typography>
            <Typography variant="body2">{teach.LastName}</Typography>
            <Typography variant="body2">{teach.JoiningDate}</Typography>
            <Typography variant="body2">{teach.PhoneNumber}</Typography>
            <Typography variant="body2">{teach.BatchAssigned}</Typography>
          </CardContent>
          <CardActions>
            <Button
               onClick={()=>history.push(`/updateteach/${teach.id}`)}
              size="small"
            >
              Edit
            </Button>
            <Button
               onClick={()=>deleteTeach(teach.id)}
              size="small"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
      </div>
    </TBase>
  );
};

export default Teachlist;
