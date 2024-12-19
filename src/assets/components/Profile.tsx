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
        border: "1px solid #a2a2a2",
        p: "20px 15px",
        rounded: "xl",
      })}>
      <img
        className={css({
          w: "200px",
          h: "200px",
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
