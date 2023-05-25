import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import EventDetail from "./EventDetail";
import Nav from "./Nav";
import EventsList from "./EventsList";
import CreateEventForm from './CreateEventForm'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events/:event_id/" element={<EventDetail />} />{" "}
          <Route path="/events/list" element={<EventsList />} />
          <Route path="/events/create" element={<CreateEventForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
