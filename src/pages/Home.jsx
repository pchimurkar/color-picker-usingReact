import ColorChanger from "../components/ColorChanger/ColorChanger";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.Home}>
      <h1 className={styles.h1}>Color Picker</h1>
      <ColorChanger />
    </div>
  );
};
export default Home;
