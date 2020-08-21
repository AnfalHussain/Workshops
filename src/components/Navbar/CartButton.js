import React, { Component } from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotificationBadge from "react-notification-badge";
import { Effect } from "react-notification-badge";

class CartButton extends Component {
  render() {
    const workshops = this.props.workshops;
    console.log("CartButton workshops", workshops);
    return (
      <li>
        <Link to="/cart">
          <NotificationBadge
            count={workshops.length}
            effect={Effect.SCALE}
            frameLength={15.0}
            style={{
              marginLeft: 200,
              backgroundColor: "#c5198c",
              fontSize: 14,
            }}
          />
          <FaShoppingCart style={{ color: "#2e1753" }} size={30} />
        </Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workshops: state.cartReducer.workshops,
  };
};

export default connect(mapStateToProps)(CartButton);
