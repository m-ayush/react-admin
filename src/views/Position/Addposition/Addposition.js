import React, { Component } from "react";
import "./Addposition.scss";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  CardText,
  Row
} from "reactstrap";

class Addposition extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Add Hiring position</strong>
                <div className="card-header-actions">
                  <button
                    className="btn btn-primary m-btn m-btn m--align-right"
                    onClick={() => this.props.history.push("/position/list")}
                  >
                    <span>
                      <span className="ng-star-inserted">Back</span>
                    </span>
                  </button>
                </div>
              </CardHeader>
              <Col xs="12" sm="6">
                <Card>
                  <CardBody>
                    <FormGroup>
                      <Label htmlFor="Title">Title</Label>
                      <Input type="text" id="Title" placeholder="Enter Title" />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="Designation">Designation</Label>
                      <Input
                        type="text"
                        id="Designation"
                        placeholder="Enter Designation"
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label htmlFor="Uplode Image" className="imagelabel">
                        Uplode Image
                      </Label>

                      <div className="UplodeIconImage">
                        <i className="icon-picture"></i>
                        {/* No documents are listed for this customer. */}
                        <Input
                          type="file"
                          id="file"
                          //placeholder="Enter your description ..."
                        />
                        <p>Add Image</p>
                      </div>
                    </FormGroup>

                    <button className="btn btn-primary m-btn m-btn m--align-right">
                      <span>
                        <span className="ng-star-inserted">Submit</span>
                      </span>
                    </button>
                  </CardBody>
                </Card>
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Addposition;
