import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MLHLocalHackDayBuild2022 from "./pages/Hackathons/MLHLocalHackDayBuild2022";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Hackathons: Announcement Pages */}
        <Route path="/mlh-localhackday-build-2022" element={<MLHLocalHackDayBuild2022 />} />
      </Routes>
    </div>
  )
}