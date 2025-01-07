import { useState } from "react";
import { css } from "../../../styled-system/css";

function About() {
  const [show, setShow] = useState(true);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <div
      className={css({
        width: { base: "100%", md: "60%", lg: "50%" },
        background: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        padding: "15px",
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
        {show ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}

export default About;
