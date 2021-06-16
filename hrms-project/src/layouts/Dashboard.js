import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import JobAdvertsList from "../Pages/JobAdvertsList";
import EmployeersList from "../Pages/EmployeersList";
import CvList from "../Pages/CvList";
import EmployersList from "../Pages/EmployersList";
import JobSeekersList from "../Pages/JobSeekersList";
import UsersList from "../Pages/UsersList";
import List from "./List";
import JobEmployer from "../Pages/HomePage/JobEmployer";
import Login from "./LogIn/LogIn";
import JobAdverstDetails from "../Pages/HomePage/JobAdverstDetails";
import JobApplication from "../Pages/HomePage/JobApplication";

export default function Dashboard() {
  return (
    <div>
      <Grid stackable>
      {/* <Grid.Row>
        <Grid.Column width={16} className="header">
          BURAYA ÖN YAZI GELECEK
        </Grid.Column>
        </Grid.Row> */}



        <Grid.Row>
        <Grid.Column width={16}>

      <Route exact path="/" component={List}/>
      <Route path="/Login" component={Login}  />
      <Route exact path="/Employeers" component={EmployeersList}/>
      <Route exact path="/Cv" component={CvList}/>
      <Route exact path="/Employers" component={EmployersList}/>
      <Route exact path="/JobSeekers" component={JobSeekersList}/>
      <Route exact path="/Users" component={UsersList}/>
      <Route exact path="/JobAdverts" component={JobAdvertsList}/>
      <Route exact path="/List" component={List}  />

      <Route  exact path="/JobApplication" component={JobApplication}  />
      <Route  path="/JobAdverstDetails/:idd" component={JobAdverstDetails}  />
      <Route exact path="/JobEmployer" component={JobEmployer}  />

        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}