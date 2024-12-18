import PersonalPicture from "../images/Abdelrahman-Nasser-transparent.png";
import { useState } from "react";
import { css } from "../../../styled-system/css";

function Profile() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <section id="profile">
      <img
        className={css({
          w: "300px",
          h: "300px",
          border: "1px solid #a2a2a2",
          borderRadius: "2xl",
        })}
        src={PersonalPicture}
        alt="Personal Photo"
      />
      <p>My name is Abdelrahman Nasser, I'm a Front-End Developer.</p>
      {show ? (
        <div className="moreDetails">
          <p>
            I build responsive, high-performance and SEO optimized websites.
          </p>
          <p>
            I love programming and am interested in learning new technologies.
          </p>
        </div>
      ) : (
        ""
      )}
      <button
        className={css({
          bgColor: "seagreen",
          color: "white",
          userSelect: "none",
        })}
        onClick={toggleShow}>
        {show ? "Hide" : "Show More"}
      </button>
    </section>
  );
}

export default Profile;
