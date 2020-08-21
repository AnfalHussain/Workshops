import React from "react";
import { connect } from "react-redux";

//Components
import Header from "./Header";
import WorkshopCard from "./WorkshopCard";

const WorkshopsList = ({ workshops }) => {
  const WorkshopsCards = workshops.map((workshop, index) => (
    <WorkshopCard
      key={`${index}`}
      id={workshop.id}
      name={workshop.name}
      description={workshop.description}
      price={workshop.price}
      image={workshop.image}
    />
  ));
  return (
    <div>
      <Header />

      {workshops ? (
        <div className="container">{WorkshopsCards}</div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ workshops }) => ({
  workshops: workshops.workshops,
});

export default connect(mapStateToProps)(WorkshopsList);

// export default WorkshopsList;
