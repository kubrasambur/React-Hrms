import React from "react";
import { Grid } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function JobEmployer() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("CompanyName", { required: true , pattern: /^[A-Za-z]+$/i})}
                placeholder="Company Name"
              />
              {errors?.CompanyName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.CompanyName?.type === "pattern" && (
        <p>Sadece Alfabetik karakter Kullanınız</p>
      )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("DepartmentName", { required: true })}
                placeholder="Department Name"
              />
              {errors?.DepartmentName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("Minsalary", { required: true, min: 0 , pattern:[1-9] })}
                placeholder="Min Salary"
              />
              {errors?.CompanyName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.CompanyName?.type === "pattern" && (
        <p>Sadece Rakam Kullanınız</p>
      )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("MaxSalary", { required: true , max:50000})}
                placeholder="Max Salary"
              />
              {errors?.DepartmentName?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <select {...register("City", { required: true })}>
                <option value="">Select City</option>
                <option value="Istanbul">İstanbul</option>
                <option value="Ankara">Ankara</option>
                <option value="Bursa">Bursa</option>
                <option value="İzmir">İzmir</option>
                <option value="Antalya">Antalya</option>
              </select>
              {errors?.City?.type === "required" && <p>Bu Alan Zorunludur.</p>}
            </Grid.Column>
            <Grid.Column width={8}>
              <select {...register("Worktype", { required: true })}>
                <option value="">Select work type</option>
                <option value="Homeoffice">Home Office</option>
                <option value="male">In Office</option>
              </select>
              {errors?.Worktype?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <select {...register("Operation Time", { required: true })}>
                <option value="">Select Operation Time</option>
                <option value="Fulltime">Full Time</option>
                <option value="Parttime">Part Time</option>
              </select>
              
              {errors?.Worktype?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              <input type="submit" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </form>

      {/* <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>qwdqdqwdq</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
            <Table.HeaderCell>Header</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobEmployers.map((jobemployer) => (
            <Table.Row key={jobemployer.id}>
              <Table.Cell>{jobemployer.id}</Table.Cell>
              <Table.Cell>{jobemployer.user_companyName}</Table.Cell>
              <Table.Cell>{jobemployer.job_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table> */}
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}