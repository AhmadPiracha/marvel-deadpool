import Hero from "../components/Hero";
import About from "../pages/About";
import Features from "./Features";
import Story from "../pages/Story";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="story">
        <Story />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
