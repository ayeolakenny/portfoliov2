import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Passion from "../components/Pasion";
import Resume from "../components/Resume";
import Work from "../components/Work";

const Index: React.FC<{}> = () => (
  <Layout>
    <About />
    <Passion />
    <Experience />
    <Resume />
    <Work />
    <Contact />
    <Footer />
  </Layout>
);

export default Index;
