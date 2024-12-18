import { css } from "../styled-system/css";
import Profile from "./assets/components/Profile.tsx";
import Qualifications from "./assets/components/Qualifications.tsx";
import Projects from "./assets/components/Projects.tsx";
function App() {
  return (
    <>
      <div
        className={css({
          width: "full",
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "space-between",
        })}>
        <Profile />
        <Qualifications />
      </div>
      <Projects />
    </>
  );
}

export default App;
