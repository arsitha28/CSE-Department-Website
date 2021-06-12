import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./lab.css";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

export default class Lab extends React.Component {
  render() {
    return (
      <div>
        <br />
        <br />

        <br />
        <br />

        <div class="container" data-aos="fade-up">
          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Flip left>
                {" "}
                <img
                  height="370px"
                  width="370px"
                  src="assets/images/lab-1.jpeg"
                ></img>{" "}
              </Flip>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Fade left>
                {" "}
                <h3>MOBILE APPLICATION DEVELOPMENT </h3>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p class="font-italic">what students do in the lab</p>{" "}
              </Fade>

              <Fade left>
                {" "}
                <ul class="nodots">
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      1. Create “Hello World” application .
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      2. To understand Activity and Intent
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      3. Create login application where you will have to
                      validate EmailID (Username) till the username and password
                      is not validated, login button should remain disabled.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      4. Create a login application as above and on successful
                      login, open browser with any URL.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      5. Demonstrate the concept of passing data through intents
                      by developing an application.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      6. Create spinner with strings taken from resource folder
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      7.Implement menu options. Create an application that will
                      change color of the screen based on selected options from
                      menu.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      8. Demonstrate the process of displaying toast (message)
                      on specific interval of time.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      9. Implement a background application that will open
                      activity on specific time.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      10. Demonstrate the use of shared preferences object.
                    </a>
                  </li>
                </ul>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p></p>{" "}
              </Fade>
            </div>
          </div>

          <br />
          <br />

          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Flip left>
                {" "}
                <img
                  height="370px"
                  width="370px"
                  src="assets/images/lab-2.jpeg"
                ></img>
              </Flip>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Fade left>
                {" "}
                <h3>WEB TECHNOLOGIES </h3>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p class="font-italic">what students do in the lab</p>{" "}
              </Fade>
              <Fade left>
                <ul>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">1. Working with Static web pages.</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      2: Enhancement of previous week job.Adding different
                      styles to the web pages created in the previous week.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      3: Working with Java Script and Regular Expressions,using
                      JavaScript. Make use of any needed JavaScript objects.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      4: Improvise the pages by introducing DOM.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      5.Write an XML file which will display the Book
                      information.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">6.Display the above XML file.</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      7.Developing JDBC based Applications.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      8.Write a java based application to demonstrate the
                      Updatable and Scrollable result sets.  Write a java
                      program to access meta data of the SQL database.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      9.Write a program to accept request parameters from a form
                      and generate the response.  Write a program to accept
                      ServletConfig and ServletConfloat parameters.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">10.Writing a servlet.</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      11.Develop a servlet to demonstrate the database access
                      and update from a database.
                    </a>
                  </li>
                </ul>
              </Fade>
              <Fade left>
                {" "}
                <p></p>{" "}
              </Fade>
            </div>
          </div>
          <br />
          <br />

          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Flip left>
                {" "}
                <img
                  height="370px"
                  width="370px"
                  src="assets/images/lab-3.jpeg"
                ></img>{" "}
              </Flip>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Fade left>
                {" "}
                <h3>DATA STRUCTURES THROUGH JAVA </h3>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p class="font-italic">what students do in the lab</p>{" "}
              </Fade>
              <Fade left>
                {" "}
                <ul>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      1. Write a Java program to design a Stack using Arrays and
                      userdefined linked list.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      2. Write a Java program to design a Queue using Arrays and
                      userdefined linked list.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      3. Design a Generic stack based on program 1 to deal with
                      Integer and String data
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      4. Design a Generic queue based on program 1 to deal with
                      Integer and String data.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      5.a) Design a java program to implement stacks using
                      LinkedList Collection class
                      <br />
                      b) Design a java program to implement stacks using
                      ArrayList Collection class
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      6.a) Design a java program to implement queues using
                      LinkedList Collection class
                      <br />
                      b) Design a java program to implement queues using
                      ArrayList Collection class
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      7.Design a java program demonstrate the use of following
                      collections
                      <br />
                      a. HashSet b. LinkedHashSet c. TreeSet
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      8.a) Design a java program to demonstrate usage of Set
                      Interface
                      <br />
                      b) Demonstrate usage of SortedSet Interface
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      9.Implement BST using Collections API. Override toString()
                      method to display inOrder, preOrder &amp; postOrder
                      Traversals.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      10.Implement AVL tree using Collections API
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      11.Write a java program to implement Heap Sort
                    </a>
                  </li>
                </ul>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p></p>{" "}
              </Fade>
            </div>
          </div>
          <br />
          <br />

          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Flip left>
                {" "}
                <img
                  height="370px"
                  width="370px"
                  src="assets/images/lab-4.jpeg"
                ></img>{" "}
              </Flip>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Fade left>
                {" "}
                <h3>.NET LAB</h3>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p class="font-italic">what students do in the lab</p>{" "}
              </Fade>
              <Fade left>
                {" "}
                <ul>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      1.Write a program to check and print the grade of a
                      student when the score is given as an integer.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      2.Write a program to demonstrate the task of overloading
                      of constructors.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      3.Write a program to check the difference in passing
                      primitive values and object references as arguments to a
                      method.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      4.Write a program to understand method overloading.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      5.Write a program to utilize both standard and custom
                      packages.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      6.Demonstrate the use of abstract classes.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      7.Write a program to demonstrate the usage of try and
                      associated keywords.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      8.Write a program to demonstrate enumerations.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      9.Write a program to show the assignment of thread
                      priorities.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      10.Write a program to understand nested classes.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class="  mb-0 float-left"></i>
                    <a class="text-left">
                      11.Write programs to understand the usage of swing
                      widgets.
                    </a>
                  </li>
                </ul>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p></p>{" "}
              </Fade>
            </div>
          </div>
          <br />
          <br />

          <div class="row">
            <div
              class="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <Flip left>
                {" "}
                <img
                  height="370px"
                  width="370px"
                  src="assets/images/lab-5.jpeg"
                ></img>{" "}
              </Flip>
            </div>
            <div
              class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Fade left>
                {" "}
                <h3>DATABASE MANAGEMENT SYSTEMS </h3>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p class="font-italic">what students do in the lab</p>{" "}
              </Fade>
              <Fade left>
                {" "}
                <ul>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      1.E-R Model,Analyze the problem carefully and come up with
                      the entities in it
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      2.Concept design with E-R ModelRelate the entities
                      appropriately.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      3.Relational ModelRepresent all the entities (Strong,
                      Weak) in tabular fashion.
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      4.NormalizationDatabase normalization is a technique for
                      designing relational database tables to minimize
                      duplication of information{" "}
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      5.Installation of Mysql and practicing DDL commands
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">6.Practicing DML commands</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">7.Querying</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      8.Triggers,Creation of insert trigger, delete trigger,
                      update trigger
                    </a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">9.Procedures</a>
                  </li>
                  <li class="nodots">
                    <i class=" mb-0 float-left"></i>
                    <a class="text-left">
                      10.Cursors,Declare a cursor that defines a result set
                    </a>
                  </li>
                </ul>{" "}
              </Fade>
              <Fade left>
                {" "}
                <p></p>{" "}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
