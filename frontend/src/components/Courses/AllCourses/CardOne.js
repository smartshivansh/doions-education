import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardOneImg from "./AllCourseComponent/CardOneImg";
import CardOneKnowMore from "./AllCourseComponent/CardOneKnowMore";
import CardOneMH from "./AllCourseComponent/CardOneMH";
import CardOneMsg from "./AllCourseComponent/CardOneMsg";
import CardOneTime from "./AllCourseComponent/CardOneTime";

function CardOne(props) {
  return (
    <div>
      <Link to="/FullStack">
        <Container className="border border-Secondary p-0 mb-3">
          <CardOneImg />
          <CardOneTime />
          <CardOneMH />
          <CardOneMsg />
          <CardOneKnowMore {...props} />
        </Container>
      </Link>
    </div>
  );
}

export default CardOne;
