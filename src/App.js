import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ApiContextProvider from "./context/ApiContext";
import { Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Footer from "./components/Footer";

function App() {
  return (
    
    <ApiContextProvider>
      <div className="md:container py-8">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details">
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </ApiContextProvider>
  );
}
export default App;
