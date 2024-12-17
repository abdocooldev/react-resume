import styles from "./assets/styles/styles.module.css";
import Profile from "./assets/components/Profile";
import Qualifications from "./assets/components/Qualifications";
function App() {
  return (
    <>
      <div className={styles.flexRow}>
        <Profile />
        <Qualifications />
      </div>
    </>
  );
}

export default App;
