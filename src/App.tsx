import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import UpcomingEvents from "./features/UpcomingEvents/UpcomingEvents";
import Feed from "./features/Pages/Feed/feed";
import Notifications from "./features/Pages/Notifacations/Notifacations";
import MeetUps from "./features/Pages/MeetUps/meetUps";

function App() {
  const location = useLocation();
  const hideUpcomingEvents = location.pathname === "/meetUps";

  const pageContainerStyle = {
    paddingTop: hideUpcomingEvents ? "50px" : "190px",
  };

  return (
    <>
      <Header />
      {!hideUpcomingEvents && <UpcomingEvents />}

      <main className="page-container" style={pageContainerStyle}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/notifacations" element={<Notifications />} />
          <Route path="/meetUps" element={<MeetUps />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
