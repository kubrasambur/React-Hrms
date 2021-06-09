import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import CandicateList from "./Pages/CandicateList";
import EmployersList from "./Pages/EmployersList";
import CvList from "./Pages/CvList";
import EmployeersList from "./Pages/EmployeersList";
import JobSeekersList from "./Pages/JobSeekersList";
import UsersList from "./Pages/UsersList"

function App() {
  return (
    <div>
      <Navi />
      <Container className="main">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/Candicate" exact component={CandicateList} />
          <Route path="/Employers" exact component={EmployersList} />
          <Route path="/Cv" exact component={CvList} />
          <Route path="/Employeers" exact component={EmployeersList} />
          <Route path="/JobSeekers" exact component={JobSeekersList} />
          <Route path="/Users" exact component={UsersList} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
