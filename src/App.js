import { useState } from "react";
import About from "./components/About";
import Form from "./components/Form";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <NavBar />
      <Form />
      {/* <About /> */}
    </>
  );
}

export default App;
