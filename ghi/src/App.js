import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Nav from "./Nav";
import CreateEventForm from "./CreateEventForm"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="events/create" element={<CreateEventForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
