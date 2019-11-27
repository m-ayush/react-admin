import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { required, email } from "redux-form-validators";
import { FormField } from "../../../../Components/FormField.jsx";
import "./LoginForm.scss";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

import logo from "../../../../assets/img/brand/logo.png";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSubmit } = this.props;

    console.log("FormField", FormField);
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <img src={logo} />
                      <h3>Admin Portal </h3>
                      <InputGroup className="mb-3">
                        <Field
                          name="email"
                          component={FormField}
                          type="email"
                          placeholder="Email:"
                          validate={[required(), email()]}
                          autoFocus
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend"></InputGroupAddon>
                        <Field
                          name="password"
                          component={FormField}
                          type="password"
                          validate={[required()]}
                          placeholder="password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="12">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default reduxForm({ form: "LoginForm" })(LoginForm);
