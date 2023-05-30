import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import "./App.css";
import MainPage from "./MainPage";
import EventDetail from "./EventDetail";
import Nav from "./Nav";
import EventsList from "./EventsList";
import CreateEventForm from "./CreateEventForm";
import Login from "./Login";
import UserSignup from "./UserSignup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider baseUrl="http://localhost:8000">
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/events/:event_id/" element={<EventDetail />} />{" "}
            <Route path="/events/list" element={<EventsList />} />
            <Route path="/events/create" element={<CreateEventForm />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/usersignup/" element={<UserSignup />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
