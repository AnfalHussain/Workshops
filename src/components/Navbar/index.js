import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Components
import AuthButton from "./AuthButton";
import CartBtn from "./CartButton";

//Logo
import icon from "../../assets/logo/lightIn.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light nav justify-content-between d-flex">
      <div class="container">
        <div className="pr-5 mr-5">
          <Link className="navbar-brand pr-5 mr-5" to="/">
            <img
              className="pr-5 mr-5"
              src={icon}
              alt="light in logo"
              style={{ height: "60px", paddingLeft: "20px" }}
            ></img>
          </Link>
        </div>

        {!!props.user && (
          <div className="collapse navbar-collapse" id="navbarResponsive"></div>
        )}
        <AuthButton className="pl-5" />
        <CartBtn className="pl-5" />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
// export default NavBar;
