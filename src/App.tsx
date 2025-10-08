import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./features/Header/Header";
import Footer from "./features/Footer/Footer";
import Feed from "./features/Pages/Feed/feed";
import Notifications from "./features/Pages/Notifacations/Notifacations";
import MeetUps from "./features/Pages/MeetUps/meetUps";
import Profile from "./features/Pages/Profile/Profile";

function App() {
  return (
    <>
      <Header />

      <main className="page-container">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/meetUps" element={<MeetUps />} />
          <Route path="/notifacations" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
