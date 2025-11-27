import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeLayout from "./layout/HomeLayout";
import AuthLayout from "./layout/AuthLayout";
import HomePage from "./pages/HomePage";
import DynamicPage from "./pages/DynamicPage";
import Login from "./pages/auth/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path=":section" element={<DynamicPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
