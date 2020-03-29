
import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  public componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return null;
  }
}
export default withRouter(ScrollToTop);
