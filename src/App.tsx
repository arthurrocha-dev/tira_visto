import "./App.css";
import { ThemeConfig } from "flowbite-react";
import { Home } from "./containers";
import { Banner } from "./containers/Banner";
import { HeroSection } from "./containers/HeroSection";
import { Footer } from "./containers/Footer";

function App() {
  return (
    <>
      <ThemeConfig dark={false} />
      <Home />
      <Banner />
      <HeroSection />

      <Footer />
    </>
  );
}

export default App;
