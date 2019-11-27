import React, { Component, Suspense } from "react";
import "./SideBarComponent.scss";
import navigation from "../../_nav";
import * as router from "react-router-dom";
import { withRouter } from "react-router";

import {
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
class SideBarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppSidebar fixed display="lg">
        <AppSidebarHeader />
        <AppSidebarForm />
        <Suspense>
          <AppSidebarNav
            navConfig={navigation}
            {...this.props}
            router={router}
          />
        </Suspense>
        <AppSidebarFooter />
        <AppSidebarMinimizer />
      </AppSidebar>
    );
  }
}

// export default SideBarComponent;
export default withRouter(SideBarComponent);
