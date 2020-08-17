import React from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";

// Components
// import AuthButton from "./AuthButton";
import icon from "../../assets/logo/logo.png";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top nav">
      <Link className="navbar-brand" to="/">
        <img src={icon} style={{ height: "60px", paddingLeft: "20px" }}></img>
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* {!!props.user && (
        <div className="collapse navbar-collapse" id="navbarResponsive">
        </div>
      )} */}
      {/* <AuthButton /> */}
    </nav>
  );
};

// const mapStateToProps = state => ({
//   user: state.user
// });

// export default connect(mapStateToProps)(NavBar);
export default NavBar;
