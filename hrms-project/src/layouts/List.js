import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertsLink from "../choices/JobAdvertsLink";
import EmployeersLink from "../choices/EmployeersLink";
import JobSeekersLink from "../choices/JobSeekersLink";
import UsersLink from "../choices/UsersLink";
import EmployersLink from "../choices/EmployersLink";
import CvLink from "../choices/CvLink";

function List() {
  return (
    <div>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <JobAdvertsLink />
            <br></br>
            <JobSeekersLink />
          </Grid.Column>
          <Grid.Column>
            <EmployeersLink />
            <br></br>
            <EmployersLink />
          </Grid.Column>
          <Grid.Column>
            <UsersLink />
            <br></br>
            <CvLink />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default List;
