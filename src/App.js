import { Route, Routes } from "react-router-dom";
import UserUpdatePage from "./page/user-update.js";
import TestPage from "./page/TestPage.js";
import NotFound from "./page/NotFound.js";
import TestUserTable from "./page/TestUserTable.js";
import SignupPage from "./page/SignupPage.js";
import MainPage from "./page/MainPage.js";
import ProfilePage from "./page/ProfilePage.js";
import { Layout } from "antd";
import MySider from "./components/MySider.js";
import { Content } from "antd/es/layout/layout.js";
import LoginPage from "./page/LoginPage.jsx";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    const token = sessionStorage.getItem("token");
    return token ? jwtDecode(token) : null;
  });
  if (!user) {
    return (
      <div
        className="App"
        style={{
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<LoginPage loginSet={setUser} />} />
        </Routes>
      </div>
    );
  }
  return (
    <div className="App">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <MySider />
        <Content>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/three" element={<TestUserTable id={1} />} />
            <Route path="/testPage" element={<TestPage />} />
            <Route path="/update/:userId" element={<UserUpdatePage />} />
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
