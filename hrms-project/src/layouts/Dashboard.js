import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateLink from "../choices/CandidateLink";
import EmployeersLink from "../choices/EmployeersLink";
import JobSeekersLink from "../choices/JobSeekersLink";
import UsersLink from "../choices/UsersLink";
import EmployersLink from "../choices/EmployersLink";
import CvLink from "../choices/CvLink";

export default function Dashboard() {
  return (
    <div>
      <Grid columns='equal'>
        <Grid.Row>
        <Grid.Column width={1}> </Grid.Column>
          <Grid.Column >
          <CandidateLink />
          <br></br>
          <JobSeekersLink />
          </Grid.Column>
          <Grid.Column >
          <EmployeersLink />
          <br></br>
          <EmployersLink />
          </Grid.Column>
          <Grid.Column >
            <UsersLink />
            <br></br>
            <CvLink />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
