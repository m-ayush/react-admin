import React, { Component } from "react";
import "./ViewAnnoucements.scss";
// import avtar6 from "../../../../public/assets/img/avatars/6.jpg";

import {
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";

import usersData from "../../Users/AnnoucementData";

class ViewAnnoucements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userDetails: usersData.find(
        user => user.id.toString() === this.props.match.params.id
      )
    };
  }

  render() {
    let { userDetails } = this.state;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Announcement Details</strong>
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
                        />
                      </FormGroup>

                      <FormGroup>
                        <div>
                          <img
                            src={"../../../assets/img/avatars/8.jpg"}
                            className="img-avatar"
                          />
                        </div>
                      </FormGroup>
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

export default ViewAnnoucements;
