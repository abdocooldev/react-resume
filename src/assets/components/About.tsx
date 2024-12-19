import { useState } from "react";
import { css } from "../../../styled-system/css";

function About() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <div
      className={css({
        width: "50%",
        "& p": {
          fontSize: "18px",
          lineHeight: "1.6",
          mb: "15px",
        },
      })}>
      <h2 className={css({ fontSize: "30px", mb: "15px", fontWeight: "bold" })}>
        About
      </h2>
      <p>My name is Abdelrahman Nasser, I'm a Front-End Developer.</p>
      {show ? (
        <>
          <p>
            I build responsive, high-performance and SEO optimized websites.
          </p>
          <p>
            I love programming and am interested in learning new technologies.
          </p>
        </>
      ) : (
        ""
      )}
      <button
        className={css({
          bgColor: "blue.900",
          color: "white",
          userSelect: "none",
          p: "5px 10px",
          rounded: "lg",
          fontSize: "20px",
          cursor: "pointer",
          transition: "0.3s ease",
          _hover: { bgColor: "blue.700" },
        })}
        onClick={toggleShow}>
        {show ? "Hide" : "Show More"}
      </button>
    </div>
  );
}

export default About;
