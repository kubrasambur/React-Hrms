import React from "react";
import {Form, Segment, Grid } from "semantic-ui-react";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <Segment inverted color="grey">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>NAME
                <input
                  {...register("Name", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Name"
                />
                {errors?.Name?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                {errors?.Name?.type === "pattern" && (
                  <p>Sadece Alfabetik karakter Kullanınız</p>
                )}
              </Grid.Column>
              <Grid.Column width={8}>SURNAME
                <input
                  {...register("Surname", { required: true })}
                  placeholder="Surname"
                />
                {errors?.Surname?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>EMAIL
                <input 
                  {...register("Email", {
                    required: true,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                  placeholder="Email"
                />
                {errors?.Email?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                {errors?.Email?.type === "pattern" && (
                  <p>Sadece Alfabetik karakter Kullanınız</p>
                )}
                <Form.Checkbox label="I agree to the Terms and Conditions" />
              </Grid.Column>
              <Grid.Column width={8}>PASSWORD
                <input
                  {...register("Password", { required: true })}
                  placeholder="Pasword"
                />
                {errors?.Pasword?.type === "required" && (
                  <p>Bu Alan Zorunludur.</p>
                )}
                
              </Grid.Column>
              <input style={{width:300, height:50,marginLeft:420,padding:10,}} type="submit" />
            </Grid.Row>
          </Grid>
        </Form>
      </Segment>
      
    </div>
  );
}

export default Login;
