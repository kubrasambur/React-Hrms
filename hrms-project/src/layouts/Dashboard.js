import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import JobAdvertsList from "../Pages/Lists/JobAdvertsList";
import EmployeersList from "../Pages/Lists/EmployeersList";
import CvList from "../Pages/Lists/CvList";
import EmployersList from "../Pages/Lists/EmployersList";
import JobSeekersList from "../Pages/Lists/JobSeekersList";
import UsersList from "../Pages/Lists/UsersList";
import List from "./List";
import JobEmployer from "../Pages/HomePage/JobEmployer";
import Login from "./LogIn/LogIn";
import JobAdverstDetails from "../Pages/Details/JobAdverstDetails";
import JobApplication from "../Pages/HomePage/JobApplication";
import CvDetails from "../Pages/Details/CvDetails"
import EmployersDetail from  "../Pages/Details/EmployersDetail"
import UsersDetail from "../Pages/Details/UsersDetail"

export default function Dashboard() {
  return (
    <div>
      <Grid stackable>
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
      <Route exact path="/JobApplication" component={JobApplication}  />
      <Route path="/JobAdvertisement/:id" component={JobAdverstDetails}  />
      <Route exact path="/JobEmployer" component={JobEmployer}  />
      <Route exact path="/Cv/:id" component={CvDetails}  />
      <Route exact path="/Employers/:id" component={EmployersDetail}/>
      <Route exact path="/Users/:id" component={UsersDetail} />

        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}