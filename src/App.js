import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Faculty from "./components/Faculty";
import Developers from "./components/Developers";
import ComplaintBox from "./components/ComplaintBox";
import Certifications from "./components/Certifications";
import FirstYear from "./components/StudentCorner/FirstYear";
import SecondYear from "./components/StudentCorner/SecondYear";
import ThirdYear from "./components/StudentCorner/ThirdYear";
import FourthYear from "./components/StudentCorner/FourthYear";
import Footer from "./components/Footer";
import AdminHeader from "./components/Admin/AdminHeader";
import Login from "./components/Admin/Login/Login";

import Seminar from "./components/Seminar";
import Library from "./components/Library";
import Research from "./components/Research";
import Workshops from "./components/Workshops";
import Alumni from "./components/Alumni";
import Events from "./components/Events";
import Lab from "./components/Lab";
import AdminResearch from "./components/Admin/AdminResearch";
import AdminComplaintBox from "./components/Admin/AdminComplaintBox/AdminComplaintBox";
import AdminStudentCorner from "./components/Admin/AdminStudentCorner";
import AdminWorkshop from "./components/Admin/AdminWorkshops";
import AlumniForm from "./components/Admin/AlumniForm";
import Announcements from "./components/Admin/Announcements";
import Reports from "./components/Admin/Report/Report";



const DefaultContainer = () => (
  <React.Fragment>
   
    
        <Route exact path="/" component={Home}/>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/seminar" component={Seminar}/>
        <Route exact path="/faculty" component={Faculty}/>
        <Route exact path="/lab" component={Lab}/>
        <Route exact path="/developers" component={Developers}/>
        <Route exact path="/complaint" component={ComplaintBox}/>
        <Route exact path="/firstyear" component={FirstYear}/>
        <Route exact path="/secondyear" component={SecondYear}/>
        <Route exact path="/thirdyear" component={ThirdYear}/>
        <Route exact path="/fourthyear" component={FourthYear}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/library" component={Library}/>
        <Route exact path="/workshops" component={Workshops}/>
        <Route exact path="/research" component={Research}/>
        <Route exact path="/alumni" component={Alumni}/>
        <Route exact path="/events" component={Events}/>

        
    <Footer />
  </React.Fragment>
);


const AdminContainer = () => (
  <React.Fragment>

    <Route exact path="/admin/adminheader" component={AdminHeader}/>
    <Route path="/admin/login" exact component={Login} />
    <Route path="/admin/AdminComplaintBox" exact component={AdminComplaintBox} />
    <Route path="/admin/AdminResearch" exact component={AdminResearch} />
    <Route path="/admin/AdminStudentCorner" exact component={AdminStudentCorner} />
    <Route path="/admin/AdminWorkshops" exact component={AdminWorkshop} />
    <Route path="/admin/AlumniForm" exact component={AlumniForm} />
    <Route path="/admin/Announcements" exact component={Announcements} />
    <Route path="/admin/Report" exact component={Reports} />

  </React.Fragment>
)

const TestContainer = () => (
  <React.Fragment>
    
  </React.Fragment>
)


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            
          {process.env.NODE_ENV === "development" && <Route path="/(test)" component={TestContainer} />}
          <Route path="/(admin)" component={AdminContainer} />
          <Route component={DefaultContainer} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
