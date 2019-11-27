import React, { Component, Suspense } from "react";
import { AppFooter } from "@coreui/react";

export class FooterComponent extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <AppFooter>
        <Suspense fallback={this.loading()}>
          <React.Fragment>
            <span>
              <a href="javascript:void(0)"></a> &copy; 2019
            </span>
            <span className="ml-auto">
              Powered by <a href="javascript:void(0)">Atram</a>
            </span>
          </React.Fragment>
        </Suspense>
      </AppFooter>
    );
  }
}

export default FooterComponent;
