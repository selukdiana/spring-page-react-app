import { Routes, Route } from "react-router";
import { Header } from "./layout/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <>
            <Header />
            <HomePage />
          </>
        }
      />
    </Routes>
  );
};

export default App;
