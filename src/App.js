import { Route, Routes } from "react-router-dom";
import Button from "./components/elements/Button";
import Header from "./components/Header";
import Landing from "./pages/Landing";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}