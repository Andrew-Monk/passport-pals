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
import AccountDetail from "./AccountDetail";

function App() {
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
  return (
    <div>
      <AuthProvider baseUrl={process.env.REACT_APP_PASSPORT_PALS_API_HOST}>
        <BrowserRouter basename={basename}>
          <Nav />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/events/:event_id" element={<EventDetail />} />{" "}
            <Route path="/events/list" element={<EventsList />} />
            <Route path="/events/create" element={<CreateEventForm />} />
            <Route path="/login/" element={<Login />} />
            <Route path="/usersignup" element={<UserSignup />} />
            <Route path="/myaccount" element={<AccountDetail />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
