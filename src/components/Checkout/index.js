import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { checkout } from "../../redux/actions";
import Card from "./Card";

class Checkout extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.workshops.forEach((item) => {
      total = total + parseFloat(item.price);
    });
    return total.toFixed(3);
  };

  handleClick = () => {
    // let newOrders = {
    //   carts: this.props.workshops,
    // };
    this.props.checkout({ carts: this.props.workshops }, this.props.history);
  };

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    const getOrderItem = this.props.workshops.map((item) => (
      <Card key={item.name} orderItem={item} />
    ));
    const profile = this.props.profile;

    return (
      <div className="container mt-5 mb-5">
        <div id="loginCard" className="card col-8 mx-auto mt-5 ">
          <div className="card-body">
            <div className="text-center">
              <h1 className="mt-5">Registration Summary</h1>
            </div>
            <div className="row m-4">
              Applicant Name:{" "}
              <span>
                {" "}
                {`${profile.first_name} ${profile.middle_name} ${profile.last_name}`}
              </span>
            </div>
            <div className="row m-4">
              Civil Id: <span> {profile.civil_id_number}</span>
            </div>
            <div className="row m-4">
              Mobile: <span>{profile.mobile_number}</span>{" "}
            </div>
            <div className="row m-4">
              Email:<span> {profile.email}</span>
            </div>
            <div className="container-fluid mb-4 mt-4 pl-4 pr-4  ">
              <div className="row m-4">
                <div className="col-4">
                  <strong> Workshop</strong>
                </div>
                <div className="col-4">
                  {" "}
                  <strong>Price </strong>
                </div>
                <div className="col-12">
                  <div className="table-responsive">
                    {getOrderItem}

                    <div
                      className="row d-flex pt-4"
                      style={{ color: "#2e1753" }}
                    >
                      <div className="col-4">
                        <strong>Total</strong>
                      </div>
                      <div className="col-4">
                        <strong>{this.totalPrice()} KWD</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col mb-2 mt-5">
                  <div className="row d-flex justify-content-end">
                    <div className="text-center">
                      <button
                        onClick={() => this.handleClick()}
                        className="btn btn-lg btn-block btn signup_btn text-uppercase"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checkout: (workshops, history) => dispatch(checkout(workshops, history)),
  };
};

const mapStateToProps = (state) => {
  return {
    orders: state.cartReducer.orders,
    workshops: state.cartReducer.workshops,
    user: state.authReducer.user,
    profile: state.authReducer.profile,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
);
