import React, { Component } from "react";

import { faTrash } from "react-icons/fa";

import { connect } from "react-redux";
// import { Link, Redirect } from "react-router-dom";
import { removeItem } from "../../redux/actions";

class Card extends Component {
  handleClick = () => {
    this.props.removeItem(this.props.orderItem);
  };
  render() {
    return (
      <tr>
        <td>{this.props.orderItem.name}</td>
        <td className="text-right">{this.props.orderItem.price}</td>
        <td className="text-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => this.handleClick()}
          >
            <faTrash size={30} />
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Card);
