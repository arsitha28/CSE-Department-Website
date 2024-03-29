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
import Labs from "./components/Labs";


const DefaultContainer = () => (
  <React.Fragment>
    <Header />
    
        <Route exact path="/" component={Home}/>
        <Route exact path="/header" component={Header}/>
        <Route exact path="/faculty" component={Faculty}/>
        <Route exact path="/labs" component={Labs}/>
        <Route exact path="/developers" component={Developers}/>
        <Route exact path="/complaint" component={ComplaintBox}/>
        <Route exact path="/firstyear" component={FirstYear}/>
        <Route exact path="/secondyear" component={SecondYear}/>
        <Route exact path="/thirdyear" component={ThirdYear}/>
        <Route exact path="/fourthyear" component={FourthYear}/>
        <Route exact path="/footer" component={Footer}/>
        
    <Footer />
  </React.Fragment>
);


const AdminContainer = () => (
  <React.Fragment>

    <Route exact path="/admin/adminheader" component={AdminHeader}/>
    <Route path="/admin/login" exact component={Login} />

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
