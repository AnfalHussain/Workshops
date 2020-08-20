import React, { Component } from "react";
import { connect } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotificationBadge, { Effect } from "react-notification-badge";
// import  from 'react-notification-badge';

class CartButton extends Component {
  render() {
    const workshops = this.props.workshops;
    return (
      <li>
        <Link to="/cart/">
          <NotificationBadge
            className="badge badge-pill badge-primary"
            style={{ transformY: 200 }}
            count={workshops !== 0 && workshops}
            effect={Effect.SCALE}
          />
          <FaShoppingCart style={{ color: "#2e1753" }} size={30} />
        </Link>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    workshops: state.workshops.workshops,
  };
};

export default connect(mapStateToProps)(CartButton);
