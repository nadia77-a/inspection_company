import React, { Component } from "react";

class FlashMessage extends Component {
  render() {
    const { data } = this.props;
    const { alertClass } = this.props;
    console.log("data", data);
    return data ? (
      <div
        className={`alert alert-${alertClass} alert-dismissible fade show`}
        role="alert"
      >
        {data.constructor === String && <li> {data}</li>}
        {data.constructor === Object &&
          Object.keys(data).map((key) => {
            return (
              <li key={key}>
                {key} {data[key]}
              </li>
            );
          })}
        {data.constructor === Array &&
          data.map((item, index) => {
            return <li key={index}>{item.msg}</li>;
          })}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ) : null;
  }
}

export default FlashMessage;

// USE EXAMPLE:
// <FlashMessage data="error on..." alertClass="danger" />
