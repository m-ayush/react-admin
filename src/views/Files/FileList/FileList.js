import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  Button
} from "reactstrap";

import usersData from "../../Users/AnnoucementData";

import "./FileList.scss";

function UserRow(props) {
  const user = props.user;
  const userLink = `/file/edit/${user.id}`;
  const viewLink = `/file/view/${user.id}`;

  const getBadge = status => {
    return status === "Active"
      ? "success"
      : status === "Inactive"
      ? "secondary"
      : status === "Pending"
      ? "warning"
      : status === "Banned"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">{user.id}</th>
      <td>{user.title}</td>
      <td>{user.description}</td>
      <td>{user.registered}</td>
      {/* <td>{user.role}</td> */}
      {/* <td>
        <Link to={userLink}>
          <Badge color={getBadge(user.status)}>{user.status}</Badge>
        </Link>
      </td> */}
      <td>
        <Link to={userLink} className="eyesUser">
          {" "}
          <i className="icon-pencil "></i>
        </Link>
        {/* <span>
          <i className="icon-pencil "></i>
        </span> */}
        <Link to={viewLink} className="eyesUser">
          <i className="icon-eye"></i>
        </Link>
        <span>
          <i className="icon-trash"></i>
        </span>
      </td>
    </tr>
  );
}

class FileList extends Component {
  render() {
    const userList = usersData.filter(user => user.id < 10);

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Document{" "}
                <small className="text-muted">list</small>
                <div className="card-header-actions">
                  <button
                    className="btn btn-primary m-btn m-btn m--align-right"
                    onClick={() => this.props.history.push("/file/add")}
                  >
                    <span>
                      <span className="ng-star-inserted">Add</span>
                    </span>
                  </button>
                </div>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Title</th>
                      <th scope="col">Documenet name</th>
                      <th scope="col">Created at</th>
                      {/* <th scope="col">Role</th> */}
                      {/* <th scope="col">Status</th> */}
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) => (
                      <UserRow key={index} user={user} />
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default FileList;
