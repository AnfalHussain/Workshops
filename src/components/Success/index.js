import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Success extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.workshops.forEach((item) => {
      total = total + parseFloat(item.price);
    });
    return total.toFixed(3);
  };

  render() {
    if (!this.props.user) return <Redirect to="/login" />;

    const orders = this.props.orders;
    console.log("orders[orders.length]", orders[orders.length]);
    return (
      <div className="container mt-5 mb-5">
        <div id="loginCard" className="card col-8 mx-auto mt-5 ">
          <div className="card-body">
            <div className="text-center">
              <h1 className="mt-5">Registration was Successful</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.cartReducer.orders,
    workshops: state.cartReducer.workshops,
    user: state.authReducer.user,
    profile: state.authReducer.profile,
  };
};

export default connect(mapStateToProps)(Success);
