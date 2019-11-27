import React, { Component } from "react";
import "./EditAnnoucements.scss";

import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  CardText,
  Row
} from "reactstrap";

import usersData from "../../Users/AnnoucementData";

class EditAnnouncments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: usersData.find(
        user => user.id.toString() === this.props.match.params.id
      )
    };
  }

  handleChange(e) {
    let userDetails = this.state.userDetails;
    userDetails[e.target.name] = e.target.value;
    this.setState({
      userDetails
    });
    console.log(this.state.userDetails);
  }

  render() {
    // const userDetails = usersData.find(
    //   user => user.id.toString() === this.props.match.params.id
    // );
    let { userDetails } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Edit Announcement</strong>
                <div className="card-header-actions">
                  <button
                    className="btn btn-primary m-btn m-btn m--align-right"
                    onClick={() =>
                      this.props.history.push("/base/announcement")
                    }
                  >
                    <span>
                      <span className="ng-star-inserted">Back</span>
                    </span>
                  </button>
                </div>
              </CardHeader>
              <Col xs="12" sm="6">
                {userDetails != undefined && (
                  <Card>
                    <CardBody>
                      <FormGroup>
                        <Label htmlFor="Title">Title</Label>
                        <Input
                          type="text"
                          id="Title"
                          placeholder="Enter Title"
                          name="title"
                          value={userDetails.title}
                          onChange={this.handleChange.bind(this)}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="Description">Description</Label>
                        <Input
                          type="textarea"
                          maxLength="500"
                          rows={4}
                          id="Description"
                          placeholder="Enter your description ..."
                          name="description"
                          value={userDetails.description}
                          onChange={this.handleChange.bind(this)}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label htmlFor="Uplode Image" className="imagelabel">
                          Uplode Image
                        </Label>

                        <div className="UplodeIconImage">
                          <i className="icon-picture"></i>
                          {/* No documents are listed for this customer. */}
                          <Input type="file" id="file" />
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
                )}
                {/* <span>
                  <i className="text-muted icon-ban"></i> Not Record Found !!!
                </span> */}
              </Col>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditAnnouncments;
