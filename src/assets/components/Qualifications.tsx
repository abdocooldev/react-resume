import { css } from "../../../styled-system/css";

function Qualifications() {
  return (
    <section
      id="qualification"
      className={css({
        background: "rgba(255, 255, 255, 0.2)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)",
        padding: "15px",
        flexGrow: "1",
        "& p": { fontSize: "18px", lineHeight: "1.6", mb: "15px" },
        "& h3": { fontSize: "18px", fontWeight: "bold", mb: "15px" },
      })}>
      <h2 className={css({ fontSize: "30px", fontWeight: "bold", mb: "15px" })}>
        My Qualifications
      </h2>
      <div className="q1">
        <h3>Bachelor of Information Science</h3>
        <p>Ain Shams University, Cairo.</p>
      </div>
      <div className="q2">
        <h3>Frontend Nanodegree Course</h3>
        <p>Udacity Inc, Online.</p>
      </div>
      <div className="q2">
        <h3>Frontend Technologies Code Camp</h3>
        <p>freeCodeCamp, Online.</p>
      </div>
    </section>
  );
}

export default Qualifications;
