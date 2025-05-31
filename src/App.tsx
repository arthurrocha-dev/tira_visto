import "./App.css";
import { ThemeConfig } from "flowbite-react";
import {
  Banner,
  Destination,
  Footer,
  HeroSection,
  Home,
  Packages,
} from "./containers";

function App() {
  return (
    <>
      <ThemeConfig dark={false} />
      <Home />
      <Banner />
      <HeroSection />
      <Destination />
      <Packages />
      <Footer />
    </>
  );
}

export default App;
