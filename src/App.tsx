import { css } from "../styled-system/css";
import Profile from "./assets/components/Profile.tsx";
import Qualifications from "./assets/components/Qualifications.tsx";
import Projects from "./assets/components/Projects.tsx";
import About from "./assets/components/About.tsx";
function App() {
  return (
    <>
      <div
        className={css({
          width: "full",
          display: "flex",
          margin: "auto",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "50px",
          mb: "50px",
        })}>
        <Profile />
        <div
          className={css({
            display: "flex",
            gap: "30px",
            width: "calc(100% - 230px)",
          })}>
          <About />
          <Qualifications />
        </div>
      </div>
      <Projects />
    </>
  );
}

export default App;
