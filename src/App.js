import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Members from "./pages/CommunityMembers/Members";
import Footer from "./components/Footer";
import CommunityStories from "./pages/CommunityStories";
import MLHLocalHackDayBuild2022 from "./pages/Hackathons/MLHLocalHackDayBuild2022";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div className="app">
      <div className="view-msg">
        <h2>Your expectations are reaching sky-heights :)</h2>
        <p>Try switching to landscape/desktop mode for proper usage</p>
      </div>
      <div className="view__app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/stories" element={<CommunityStories />} />
          {/* Hackathons: Announcement Pages */}
          <Route
            path="/mlh-localhackday-build-2022"
            element={<MLHLocalHackDayBuild2022 />}
          />

          {/* Hackathons: Members Pages */}
          <Route path="/members" element={<Members />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
