import styles from "./assets/styles/styles.module.css";
import Profile from "./assets/components/Profile";
import Qualifications from "./assets/components/Qualifications";
import Projects from "./assets/components/Projects";
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
