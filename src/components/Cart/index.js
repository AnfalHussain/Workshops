import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

class ShoppingCart extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.workshops.forEach((item) => {
      total = total + parseFloat(item.price);
    });
    return total.toFixed(3);
  };
  render() {
    const getOrderItem = this.props.workshops.map((item) => (
      <Card key={item.name} orderItem={item} />
    ));

    return (
      <>
        <div className="container mt-5 mb-5">
          <div id="loginCard" className="card col-8 mx-auto mt-5 ">
            <div className="card-body">
              <div className="text-center">
                <h1 className="mt-5">My Cart</h1>
              </div>

              <div className="container-fluid mb-4 mt-4 pl-4 pr-4  ">
                {getOrderItem.length ? (
                  <div className="row m-4">
                    <div className="col-4">
                      <strong>Workshop</strong>
                    </div>
                    <div className="col-4">
                      {" "}
                      <strong>Price</strong>
                    </div>
                    <div className="col-12">
                      <div className="table-responsive">
                        {getOrderItem}

                        <div
                          className="row d-flex pt-4"
                          style={{ color: "#c5198c" }}
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
                          <Link
                            className="btn signup_btn"
                            to="/checkout"
                            params={{ total: this.totalPrice() }}
                          >
                            Proceed to checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center pt-5 pb-5"> Cart is Empty </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workshops: state.cartReducer.workshops,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
