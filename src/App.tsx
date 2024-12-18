import styles from "./assets/styles/styles.module.css";
import Profile from "./assets/components/Profile.tsx";
import Qualifications from "./assets/components/Qualifications.tsx";
import Projects from "./assets/components/Projects.tsx";
function App() {
  return (
    <>
      <div className={styles.flexRow}>
        <Profile />
        <Qualifications />
      </div>
      <Projects />
    </>
  );
}

export default App;
