import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default MainPage;
