import React from 'react';

import './App.css';
import UserReg from './components/UserReg';
import UserLogin from './components/UserLogin';

import {Route,Link,Switch} from 'react-router-dom'
import PrincipalDashBoard from './components/principal/PrincipalDashBoard';
import HodDashBoard from './components/Hod/HodDashBoard';
import FacultyDashBoard from './components/Faculty/FacultyDashBoard';
import AoDashBoard from './components/Ao/AoDashBoard';
import OfficeDashBoard from './components/Office/OfficeDashBoard';
import StudentDashBoard from './components/Student/StudentDashBoard';
import EsectionDashBoard from './components/Esection/EsectionDashBoard';
import AsectionDashBoard from './components/Asection/AsectionDashBoard';



function App() {
  return (
    <div className="container-lg">
    <div className="App container">
    
{/* <UserReg/>
<UserLogin/> */}
<Switch>
  <Route exact path="/" component={UserLogin}></Route>
  <Route exact path="/reg" component={UserReg}></Route>
  <Route exact path="/Principal"  render={(props)=><PrincipalDashBoard {...props}></PrincipalDashBoard>} ></Route>
  <Route exact path="/Hod" component={HodDashBoard}></Route>
  <Route exact path="/Faculty" component={FacultyDashBoard}></Route>
  <Route exact path="/Ao" component={AoDashBoard}></Route>
  <Route exact path="/Office" component={OfficeDashBoard}></Route>
  <Route exact path="/Student" component={StudentDashBoard}></Route>
  <Route exact path="/Esection" component={EsectionDashBoard}></Route>
  <Route exact path="/Asection" component={AsectionDashBoard}></Route>
</Switch>
 </div>
  </div>
  );
}

export default App;
