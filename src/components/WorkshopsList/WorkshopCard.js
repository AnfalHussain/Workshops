import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import { RiAddCircleFill } from "react-icons/ri";

const WorkshopCard = ({ name, description, image, price }) => {
  return (
    <div className="container row jumbotron-fluid  align-items-center pb-5 workshop_item">
      <div className="col-md-6 col-xs-12 text-center">
        <img src={image} alt="workshop" height={300} />
      </div>{" "}
      <div className="col-md-6 col-xs-12">
        <div>
          <h1>{name}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>
            {" "}
            <AiFillDollarCircle style={{ color: "#c5198c" }} size={30} />
            <span className="pl-3"></span>
            {price} KD
          </p>

          <div>
            <div className="btn btn_hover add_btn">
              <RiAddCircleFill style={{ color: "white" }} size={30} /> Add To
              Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
