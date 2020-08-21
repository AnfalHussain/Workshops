import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";

class ShoppingCart extends Component {
  totalPrice = () => {
    let total = 0;
    this.props.workshops.forEach((item) => {
      total = total + parseFloat(item.price) * parseFloat(item.quantity);
    });
    return total.toFixed(3);
  };
  render() {
    const getOrderItem = this.props.workshops.map((item) => (
      <Card key={item.name} orderItem={item} />
    ));

    return (
      <>
        <section id="overlay" className="single-section">
          <h1 id="my-cart" className="mt-5">
            My Cart
          </h1>
        </section>

        <div className="container-fluid mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Product</th>
                      <th scope="col" className="text-center">
                        Quantity
                      </th>
                      <th scope="col" className="text-right">
                        Price
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    {getOrderItem}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <strong>Total</strong>
                      </td>
                      <td className="text-right">
                        <strong>{this.totalPrice()} KWD</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2 mt-5">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/home">
                    <button className="btn btn-lg btn-secondary rounded-pill">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <Link to="/checkout" params={{ total: this.totalPrice() }}>
                    <button className="btn btn-lg btn-outline-success rounded-pill">
                      Proceed to checkout
                    </button>
                  </Link>
                </div>
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
