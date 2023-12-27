import './App.css';
import {Switch } from 'react-router-dom'
import {Route} from 'react-router-dom'
import ReadStud from './Component/ReadStud';
import UpdateStud from './Component/UpdateStud';
import Dashboard from './Component/Dashboard';
import AddStud from './Component/AddStud';
import data from './Data/data';
import { useEffect, useState } from 'react';
import Teachlist from './Component/Teachlist';
import AddTeach from './Component/AddTeach';
import teachdata from './TeachData/TeachData';
import UpdateTeach from './Component/UpdateTeach';
import TBase from './Base/TBase';
import LoginPage from './Component/LoginPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const [Student, setStudent] = useState([]);
  const [Teacher, setTeacher] = useState([])
  const history = useHistory()
  useEffect(()=>{
    const  getStudent  = async ()=>{
        const response = await fetch("https://mentor-studentbackend-connection.onrender.com/students/all",{
          method:"GET",
          headers : {
            "x-auth-token": localStorage.getItem("token")
          }
        });
        const data = await response.json();
        setStudent(data.data)
    }
    if(!localStorage.getItem("token")){
      history.push("/login")
    }else{
      getStudent()
    }
    
  },[])

  useEffect(()=>{
    const getTeacher = async () => {
      const response = await fetch("https://mentor-studentbackend-connection.onrender.com/mentors/all",{
        method:"GET",
      });
      const teachdata = await response.json();
      if(teachdata){
        setTeacher(teachdata)
      }
    }
    getTeacher();
  },[])
  
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Dashboard/>
        </Route>

        <Route  path="/studentlist">
        <ReadStud
         Student = {Student}
         setStudent = {setStudent}
        />
        </Route>

        <Route path="/add">
        <AddStud
         Student = {Student}
         setStudent = {setStudent}
        />
        </Route>

        <Route path="/update/:id">
        <UpdateStud
        Student = {Student}
        setStudent = {setStudent}
        />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>

        <Route path="/Techers">
        <TBase/>
        </Route>

        <Route path="/techerslist">
        <Teachlist
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

        <Route path="/addteach">
        <AddTeach
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

        <Route path="/updateteach/:id">
        <UpdateTeach
        Teacher = {Teacher}
        setTeacher= {setTeacher}
        />
        </Route>

        <Route path="/login">
          <LoginPage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
