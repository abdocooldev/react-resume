import PersonalPicture from "../images/abdelrahman-nasser.webp";
import { css } from "../../../styled-system/css";
import Title from "./Title";

function Profile() {
  return (
    <section
      id="profile"
      className={css({
        display: "flex",
        flexDir: "column",
        w: "300px",
        maxW: "100%",
        p: "20px 15px",
        rounded: "xl",
        m: "0 auto",
        background: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
      })}>
      <img
        className={css({
          w: "200px",
          h: "auto",
          maxW: "100%",
          borderRadius: "2xl",
          display: "block",
          m: "auto",
        })}
        src={PersonalPicture}
        alt="Personal Photo"
      />
      <h1
        className={css({
          my: "20px",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
        })}>
        Abdelrahman Nasser
      </h1>
      <Title />
    </section>
  );
}

export default Profile;
