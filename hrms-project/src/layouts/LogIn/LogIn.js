import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
function Login() {
  return (
    <div>
      <br /> 
      <Segment inverted>
        <Form inverted>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
          </Form.Group>
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default Login