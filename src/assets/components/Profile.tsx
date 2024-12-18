import styles from "../styles/styles.module.css";
import PersonalPicture from "../images/Abdelrahman-Nasser-transparent.png";
import { useState } from "react";

function Profile() {
  const [show, setShow] = useState(false);
  function toggleShow() {
    setShow(!show);
  }
  return (
    <section id="profile">
      <img
        className={styles.profilePhoto}
        src={PersonalPicture}
        alt="Personal Photo"
      />
      <p>My name is Abdelrahman Nasser, I'm a Front-End Developer.</p>
      {show ? (
        <div className={styles.moreDetails}>
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
      <button onClick={toggleShow}>{show ? "Hide" : "Show More"}</button>
    </section>
  );
}

export default Profile;
