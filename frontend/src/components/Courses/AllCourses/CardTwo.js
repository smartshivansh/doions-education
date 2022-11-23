import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardTwoImg from "./AllCourseComponent/CardTwoImg";
import CardTwoKnowMore from "./AllCourseComponent/CardTwoKnowMore";
import CardTwoMH from "./AllCourseComponent/CardTwoMH";
import CardTwoMsg from "./AllCourseComponent/CardTwoMsg";
import CardTwoTime from "./AllCourseComponent/CardTwoTime";

function CardTwo(props) {
  return (
    <div>
      <Link to="/DigitalMarketing">
        <Container className="border border-Secondary p-0 mb-3">
          <CardTwoImg />
          <CardTwoTime />
          <CardTwoMH />
          <CardTwoMsg />
          <CardTwoKnowMore {...props} />
        </Container>
      </Link>
    </div>
  );
}

export default CardTwo;
