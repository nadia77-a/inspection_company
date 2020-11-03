import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import FlashMessage from "shared-components/FlashMessage";

import { AuthActions } from "redux-store/models";

class Login extends Component {
  state = {
    email: "",
  };

  handleLoginSubmit(email) {
    this.setState({ email });
  }
  onSubmitForm = (evt) => {
    if (evt) {
      this.props.signInByEmail(evt.email, evt.password);
    }
  };
  render() {
    let { errors } = this.props;
    let err_message = errors.data ? errors.data : errors.message;

    return (
      <div className="container">
        <div className="row">
          {/* <FlashMessage data="error on..." alertClass="danger" /> */}
          <div className="col-md-6 mx-auto">
            {errors && Object.keys(errors).length > 0 && (
              <div>
                <FlashMessage data={err_message} alertClass="danger" />
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1>Login</h1>

            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={this.onSubmitForm}
              validationSchema={Yup.object().shape({
                // email: Yup.string().email().required("Required"),
                email: Yup.string().required("Required"),
                password: Yup.string().required("Required").min(6),
              })}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  isValid,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="text"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control text-input"
                        // className={
                        //   errors.email && touched.email
                        //     ? "form-control text-input error"
                        //     : "form-control text-input"
                        // }
                        placeholder="Enter email"
                      />
                      {errors.email && touched.email && (
                        <div className="input-feedback">{errors.email}</div>
                      )}
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.password && touched.password
                            ? "form-control text-input error"
                            : "form-control text-input"
                        }
                        placeholder="Password"
                      />
                      {errors.password && touched.password && (
                        <div className="input-feedback">{errors.password}</div>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => {
                        this.handleLoginSubmit(values.email);
                      }}
                      disabled={!isValid}
                    >
                      Submit
                    </button>
                    <div className="form-group">
                      Not registered yet? Register from{" "}
                      <Link to="/register">here</Link>.
                    </div>
                  </form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    );
  }
}

const mapsStateToProps = (state) => ({
  accountInfo: state.auth.accountInfo,
  errors: state.auth.accountInfoError,
});

export default connect(mapsStateToProps, AuthActions)(Login);
