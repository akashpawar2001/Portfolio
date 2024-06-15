import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Credentials from "./pages/Credentials";
import Service from "./pages/Service";
import {
  AdminPanel,
  ArtStudio,
  Articlehub,
  Expensemanager,
  Gallarypics,
  ResumeWiz,
} from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Works />} />
        <Route path="/work/project1" element={<ResumeWiz />} />
        <Route path="/work/project2" element={<Gallarypics />} />
        <Route path="/work/project3" element={<Articlehub />} />
        <Route path="/work/project4" element={<Expensemanager />} />
        <Route path="/work/project5" element={<ArtStudio />} />
        <Route path="/work/project6" element={<AdminPanel />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credentials" element={<Credentials />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
