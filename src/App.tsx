import { css } from "../styled-system/css";
import Profile from "./assets/components/Profile.tsx";
import Qualifications from "./assets/components/Qualifications.tsx";
import Projects from "./assets/components/Projects.tsx";
import About from "./assets/components/About.tsx";
import Header from "./assets/components/layouts/Header.tsx";
function App() {
  return (
    <>
      <Header />
      <div
        className={css({
          width: "full",
          display: "flex",
          margin: "auto",
          alignItems: "flex-start",
          justifyContent: "space-between",
          flexDir: { base: "column", sm: "row" },
          gap: { base: "50px", mdOnly: "30px" },
          mb: "50px",
        })}>
        <Profile />
        <div
          className={css({
            display: "flex",
            gap: "30px",
            width: { base: "100%", sm: "calc(100% - 230px)" },
            flexDir: { base: "column ", md: "row" },
            textAlign: { base: "center", sm: "left" },
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
