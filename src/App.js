import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import CommunityStories from "./pages/CommunityStories";
import MLHLocalHackDayBuild2022 from "./pages/Hackathons/MLHLocalHackDayBuild2022";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/stories" element={<CommunityStories />} />
        {/* Hackathons: Announcement Pages */}
        <Route
          path="/mlh-localhackday-build-2022"
          element={<MLHLocalHackDayBuild2022 />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
