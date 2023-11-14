import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/theme";
import ProjectSection from "./components/project/ProjectSection";
import AboutMe from "./components/AboutMe";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  //useEffect to work externally to change HTML classes

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="bg-gradient-to-br from-orange-100 to-purple-100 text-[#d63781]">
        <Navbar />
        <Hero />
        <AboutMe />
        <ProjectSection />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
