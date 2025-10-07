import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import UpcomingEvents from "./features/UpcomingEvents/UpcomingEvents";
import Feed from "./features/Pages/Feed/feed";
import Notifications from "./features/Pages/Notifacations/Notifacations";
import MeetUps from "./features/Pages/MeetUps/meetUps";

function App() {
  return (
    <>
      {/* ===== Header ===== */}
      <Header />
      <UpcomingEvents />

      {/* ===== Main Routes Area ===== */}
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/notifacations" element={<Notifications />} />
          <Route path="/meetUps" element={<MeetUps />} />
        </Routes>
      </main>

      {/* ===== Footer ===== */}
      <Footer />
    </>
  );
}

export default App;
