import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./features/Header/Header";
import Feed from "./features/Feed/feed";
import Footer from "./features/Footer/Footer";
import Notifications from "./features/Notifacations/Notifacations";
import Test from "./features/Test/Test";
// import UpcomingEvents from "./features/UpcomingEvents/UpcomingEvents";

function App() {
  return (
    <>
      <Header />
      {/* <UpcomingEvents /> */}

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/notifacations" element={<Notifications />} />
        <Route path="/test" element={<Test />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
