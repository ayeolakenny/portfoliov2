import NavBar from "./NavBar";
import styles from "../styles/Header.module.css";

const Header: React.FC<{}> = () => (
  <section className={styles.navImage} id="home">
    <NavBar />
    <section className="flex flex-wrap justify-center content-center h-full">
      <div className="">
        <h1 className="text-8xl tracking-wide text-gray-200">
          👋Hi, I'm Kehinde
        </h1>
        <p className="text-center text-2xl text-gray-200">
          Full Stack Developer
        </p>
        <a className="fa fa-angle-down page-scroll" href="#about"></a>
      </div>
    </section>
    {/* <svg className="animate-bounce w-6 h-6 bg-white place-self-center"></svg> */}
  </section>
);

export default Header;
