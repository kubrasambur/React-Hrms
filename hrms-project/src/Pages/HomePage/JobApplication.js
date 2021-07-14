import React from "react";
import { Grid,Segment  } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import {postCv} from "../../services/CvService"

function JobApplication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    postCv(data);
  };
  return (
    <div>
      <br />
      <Segment inverted color="grey">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("JobseekerName", {
                  required: true,
                  pattern: /^[A-Za-z]+$/i,
                })}
                placeholder="Name"
              />
              {errors?.Name?.type === "required" && <p>Bu Alan Zorunludur.</p>}
              {errors?.Name?.type === "pattern" && (
                <p>Sadece Alfabetik karakter Kullanınız</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("JobseekerSurname", { required: true })}
                placeholder="Surname"
              />
              {errors?.Surname?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <input
                {...register("BirthDate", {
                  required: true,
                  min: 0,
                  pattern: [1 - 9],
                })}
                placeholder="Birth Date"
              />
              {errors?.BirthDate?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              {errors?.BirthDate?.type === "pattern" && (
                <p>Sadece Rakam Kullanınız</p>
              )}
            </Grid.Column>
            <Grid.Column width={8}>
              <input
                {...register("PhoneNumber", { required: true })}
                placeholder="Phone Number"
              />
              {errors?.PhoneNumber?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <select
                {...register("City", { required: true, pattern: [1 - 9] })}
              >
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
            
            <Grid.Column width={8}>
              <input
                {...register("School", { required: true })}
                placeholder="School"
              />
              {errors?.School?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            
            </Grid.Column>
            <Grid.Column width={8}>
            <input
                {...register("Github", { required: true })}
                placeholder="Github"
              />
              {errors?.Github?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={8}>
              <input color="grey"
                {...register("JobseekerExperience", { required: true })}
                placeholder="Work Experiences"
              />
              {errors?.WorkExperiences?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
              
            </Grid.Column>
            <Grid.Column width={8}>
            <input
                {...register("Image", { required: true })}
                placeholder="Image Url"
              />
              {errors?.Image?.type === "required" && (
                <p>Bu Alan Zorunludur.</p>
              )}
            </Grid.Column>
            <input type="submit" />
          </Grid.Row>
        </Grid>
      </form>
      </Segment>
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
    </div>
  );
}

export default JobApplication;
