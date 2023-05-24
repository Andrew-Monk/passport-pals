import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import EventDetail from "./EventDetail";
import Nav from "./Nav";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events/:event_id/" element={<EventDetail />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
