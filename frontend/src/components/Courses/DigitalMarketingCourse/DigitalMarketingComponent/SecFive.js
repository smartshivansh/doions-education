import React from "react";
import { Container } from "react-bootstrap";

function SecFive() {
  return (
    <div>
      <Container>
        <h1 className="d-flex justify-content-center fw-bold py-5 mt-5">
          Who should take this course?
        </h1>
        <ul>
          <li>
            <p>Anyone who is curious about digital marketing</p>{" "}
          </li>
          <li>
            <p> Entrepreneurs who wish to promote their business</p>{" "}
          </li>
          <li>
            <p>Those looking for a career change</p>{" "}
          </li>
          <li>
            <p> Serious marketers & hobbyists</p>
          </li>
          <li>
            <p> Influencers and Artists</p>{" "}
          </li>
          <li>
            <p> Students & teenagers </p>
          </li>
          <li>
            <p>Anyone who wants to build their online brand</p>
          </li>
          <li>
            <p>Digital Creators</p>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default SecFive;
