import "./App.css";
import Landingpage from "./components/Landingpage";
import Navnavbar from "./components/Navnavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todolist from "./components/Todolist";
import Passwordgenerate from "./components/Passwordgenerate";
import { useState } from "react";
function App() {
  const [logo, setlogo] = useState(true);
  const [themeicon, setthemeicon] = useState(true);
  const setdarktheme = () => {
    document.querySelector("body").setAttribute("theme", "dark");
  };

  const setlighttheme = () => {
    document.querySelector("body").setAttribute("theme", "light");
  };
  const changetheme = () => {
    themeicon
      ? setdarktheme() || setlogo(false) || setthemeicon(false)
      : setlighttheme() || setlogo(true) || setthemeicon(true);
  };

  return (
    <>
      <BrowserRouter>
        <Navnavbar
          changetheme={changetheme}
          logo={logo}
          themeicon={themeicon}
        />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/todolist" element={<Todolist />} />
          <Route path="/passgen" element={<Passwordgenerate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
