import "./App.css";
import { ThemeConfig } from "flowbite-react";
import { Home } from "./containers";

function App() {
  return (
    <>
      <ThemeConfig dark={false} />

      <Home />
    </>
  );
}

export default App;
