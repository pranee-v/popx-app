import { Routes, Route, Navigate } from "react-router-dom";
import MobileFrame from "./components/MobileFrame";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AccountSettings from "./pages/AccountSettings";

import "./App.css";
import "./components/forms.css";
import "./pages/Welcome.css";
import "./pages/Auth.css";
import "./pages/AccountSettings.css";

export default function App() {
  return (
    <MobileFrame>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileFrame>
  );
}
