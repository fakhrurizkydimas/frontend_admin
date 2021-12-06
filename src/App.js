import { Route, Routes } from "react-router-dom";
import { Navbar, Report } from "./components";
import Home from "./pages/Home";
import Portal from "./pages/Portal";
import { NewsUpdate, OrganizationalStructure, BOD, Regulation, Add, Edit } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Portal />}>
          <Route path="/news/update" element={<NewsUpdate />} />
          <Route path="/add" element={<Add />} />
          <Route path="/Edit" element={<Edit/>} />
          <Route path="/news/bod" element={<BOD />} />
          <Route path="/news/regulation" element={<Regulation />} />
         {/* <Route path="/login" element={<Logins />} /> */}
          <Route path="/admin" element={<Add />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
