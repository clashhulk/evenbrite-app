import "./App.css";
import ShowEvent from "./Components/ShowEvent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddEvent from "./Components/AddEvent";
import LikedEventByUser from "./Components/LikedEventByUser";
import Login from "./Components/Login";
import NavbarMenu from "./Components/NavbarMenu";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AddedEvents from "./Components/AddedEvents";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarMenu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addedbyuser" element={<AddedEvents />} />
          <Route exact path="/show-events" element={<ShowEvent />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/add-event" element={<AddEvent />} />
          <Route exact path="/:id" element={<LikedEventByUser />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
