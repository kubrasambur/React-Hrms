import React from "react";
import { Table,Button } from "semantic-ui-react";
import { useParams,useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [JobAdverts, setJobAdverts] = useState([]);
  const history = useHistory()

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, [id]);
  const application = () => {
    window.alert("Başvuru İşlemi Başarıyla Tamamlandı.")
    history.push("/")
  }

  return (
    <div>
      Detay : {id}
      <Table celled inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>City Id</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Work Type</Table.HeaderCell>
            <Table.HeaderCell>Application</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.city_id}</Table.Cell>
              <Table.Cell>{adverts.job_description}</Table.Cell>
              <Table.Cell>{adverts.min_salary}</Table.Cell>
              <Table.Cell>{adverts.max_salary}</Table.Cell>
              <Table.Cell>{adverts.work_type}</Table.Cell>
              <Table.Cell ><Button onClick={application} > Application </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
}
