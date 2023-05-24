import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Nav from "./Nav";
import EventDetails from "./EventDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events/list" element={<EventsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
