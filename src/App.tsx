
import { Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, HomePage, PortofolioPage, SkilsPage } from "./page";
import { NavBar } from "./components/organisms";

function App() {
  return (
   <div className="bg-[#171717] ">
    <NavBar />
     <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skils" element={<SkilsPage />} />
        <Route path="/portofolio" element={<PortofolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
    </Routes>
   </div>
  );
}

export default App;
