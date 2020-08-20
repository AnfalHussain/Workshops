import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Loading";

import { connect } from "react-redux";
class Profile extends Component {
  render() {
    const user = this.props.user;
    const profile = this.props.profile;
    const loading = this.props.profileLoading;
    if (!user) return <Redirect to="/" />;

    if (user) {
      if (loading) return <Loading />;

      return (
        <div className="container mt-5">
          <div id="loginCard" className="card col-6 mx-auto  mt-5">
            <div className="card-body">
              <div className="text-center">
                <h4 className="card-title mb-4 text-dark">Your Profile</h4>
              </div>
            </div>
          </div>

          <div className="jumbotron">
            {/* {/* <p> Username: {profile.user.username}</p> */}
            {/* <p> First Name: {profile.user.first_name} </p>
          <p> Last Name: {profile.user.last_name} </p>
          <p> Email: {profile.user.email} </p>
          <p> Age: {profile.age} </p>
          <p> Gender: {this.genderString(profile.gender)} </p>
          <p> Phone: {profile.phone} </p>  */}
          </div>

          <div className=" row justify-content-center mb-5">
            <Link to="/order-history">
              <button className="btn rounded-pill btn-info mr-5">
                Registration History
              </button>
            </Link>
            <br />
            <Link to="/edit-profile">
              <button className="btn rounded-pill btn-outline-secondary">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  profileLoading: state.authReducer.profileLoading,
});

export default connect(mapStateToProps)(Profile);
