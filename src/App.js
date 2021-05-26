import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Developers from "./components/Developers";
import ComplaintBox from "./components/ComplaintBox";
import Certifications from "./components/Admin/Certifications";
import Ai1 from "./components/StudentCorner/Btech/FirstYear/Ai1";
import Ai2 from "./components/StudentCorner/Btech/SecondYear/Ai2";
import Ai3 from "./components/StudentCorner/Btech/ThirdYear/Ai3";
import Ai4 from "./components/StudentCorner/Btech/FourthYear/Ai4";
import Cse1 from "./components/StudentCorner/Btech/FirstYear/Cse1";
import Cse2 from "./components/StudentCorner/Btech/SecondYear/Cse2";
import Cse3 from "./components/StudentCorner/Btech/ThirdYear/Cse3";
import Cse4 from "./components/StudentCorner/Btech/FourthYear/Cse4";
import Cs1 from "./components/StudentCorner/Btech/FirstYear/Cs1";
import Cs2 from "./components/StudentCorner/Btech/SecondYear/Cs2";
import Cs3 from "./components/StudentCorner/Btech/ThirdYear/Cs3";
import Cs4 from "./components/StudentCorner/Btech/FourthYear/Cs4";
import Ds1 from "./components/StudentCorner/Btech/FirstYear/Ds1";
import Ds2 from "./components/StudentCorner/Btech/SecondYear/Ds2";
import Ds3 from "./components/StudentCorner/Btech/ThirdYear/Ds3";
import Ds4 from "./components/StudentCorner/Btech/FourthYear/Ds4";
import Mfirstyear from "./components/StudentCorner/Mtech/Mfirstyear";
import Msecondyear from "./components/StudentCorner/Mtech/Msecondyear";
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
import Year1 from  "./components/Faculty/Year1";
import Year2 from  "./components/Faculty/Year2";
import Year3 from  "./components/Faculty/Year3";
import Covid from "./components/Covid";
import FacultyLogin from "./components/FacultyLogin/FacultyLogin";
import Aboutus from "./components/Aboutus";


const DefaultContainer = () => (
  <React.Fragment>
   
    <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/seminar" component={Seminar}/>
        <Route exact path="/faculty_year1" component={Year1}/>
        <Route exact path="/faculty_year2" component={Year2}/>
        <Route exact path="/faculty_year3" component={Year3}/>
        <Route exact path="/lab" component={Lab}/>
        <Route exact path="/developers" component={Developers}/>
        <Route exact path="/complaint" component={ComplaintBox}/>
        <Route exact path="/ai1" component={Ai1}/>
        <Route exact path="/ai2" component={Ai2}/>
        <Route exact path="/ai3" component={Ai3}/>
        <Route exact path="/ai4" component={Ai4}/>
        <Route exact path="/cs1" component={Cs1}/>
        <Route exact path="/cs3" component={Cs3}/>
        <Route exact path="/cs2" component={Cs2}/>
        <Route exact path="/cs4" component={Cs4}/>
        <Route exact path="/cse1" component={Cse1}/>
        <Route exact path="/cse2" component={Cse2}/>
        <Route exact path="/cse3" component={Cse3}/>
        <Route exact path="/cse4" component={Cse4}/>
        <Route exact path="/ds1" component={Ds1}/>
        <Route exact path="/ds2" component={Ds2}/>
        <Route exact path="/ds3" component={Ds3}/>
        <Route exact path="/ds4" component={Ds4}/>
        <Route exact path="/firstyear" component={Mfirstyear}/>
        <Route exact path="/secondyear" component={Msecondyear}/>
        <Route exact path="/footer" component={Footer}/>
        <Route exact path="/library" component={Library}/>
        <Route exact path="/workshops" component={Workshops}/>
        <Route exact path="/research" component={Research}/>
        <Route exact path="/alumni" component={Alumni}/>
        <Route exact path="/events" component={Events}/>
        <Route exact path="/covid" component={Covid}/>
        <Route exact path="/about" component={Aboutus}/>

        
    <Footer />
  </React.Fragment>
);


const AdminContainer = () => (
  <React.Fragment>

    <AdminHeader/>

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

const FacultyContainer = () => (
  <React.Fragment>

    

    <Route exact path="/faculty/login" component={FacultyLogin}/>
    
    <Route path="/faculty/Certifications" exact component={Certifications} />

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
          <Route path="/(faculty)" component={FacultyContainer} />
          <Route component={DefaultContainer} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
