import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { Container } from "react-bootstrap";

function SuccessContact(props) {
  console.log("SuccessFrom", props);
  const tainer = useRef(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: tainer.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./Success.json"),
    });

    anim.addEventListener("enterFrame", function (animation) {
      if (animation.currentTime > anim.totalFrames - 10) {
        // this 10 is Adjusted as the lottie animation
        // The animation have 90 frames and 80 is the where check animation completes and holds
        // after that the animation object dissappears
        anim.pause();
      }
    });
  }, []);

  return (
    <Container>
      {show ? (
        <div>
          <p>Thank you we got your queries, our admin will contact you soon.</p>
          <div className="d-flex justify-content-center align-items-center">
            <div ref={tainer} style={{ height: "400px", width: "400px" }}></div>
          </div>
        </div>
      ) : null}

      {/* <button onClick={() => setShow(true)}>show</button> */}
      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => setShow(false)}
          className="p-2 px-4 me-2 m-3 fw-bold "
          style={{
            background: "#E63732",
            color: "#fff",
            border: "none",
          }}
        >
          Done
        </button>
      </div>
    </Container>
  );
}

export default SuccessContact;
