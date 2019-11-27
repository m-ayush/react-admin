import React, { Component } from "react";
// import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import DashBoardContainer from "../../Pages/Dashboard/DashboardContainer";
import AuthGuard from "../Guards/AuthGuard";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import SideBarComponent from "../../Components/SideBarComponent/SideBarComponent";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
class PrivateRoutes extends Component {
  state = {};
  render() {
    return (
      <div className="PrivateArea__content">
        {/* <HeaderComponent></HeaderComponent>
        <SideBarComponent></SideBarComponent> */}
        <AuthGuard path="/" component={DashBoardContainer} />
        {/* <AuthGuard path="/dashboard" component={DashBoardContainer} /> */}
        {/* <FooterComponent></FooterComponent> */}
      </div>
    );
  }
}

export default withRouter(PrivateRoutes);
