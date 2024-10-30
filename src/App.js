import { Route, Routes } from "react-router-dom";
import UserUpdatePage from "./page/user-update.js";
import PostPage from "./page/PostPage.jsx";
import SignupPage from "./page/SignupPage";
import MainPage from "./page/MainPage";
import ProfilePage from "./page/ProfilePage";
import { Layout } from "antd";
import MySider from "./components/MySider";
import { Content } from "antd/es/layout/layout.js";
import LoginPage from "./page/LoginPage.jsx";
import { useEffect, useState } from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { loginUserId } from "./lib/atom.js";
import { userDecode } from "./lib/userDecode.js";
import LoadingPage from "./page/LoadingPage.jsx";
import { getAxios } from "./lib/restAxios.js";

function App() {
  const token = sessionStorage.getItem("token");
  const userId = token ? userDecode(token).id : null;
  const [user, setUser] = useRecoilState(loginUserId);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAxios(`user/${userId}`).then((data) => {
      if (data.err) setUser(null);
      else setUser(data);
      setLoading(false);
    });
  }, [userId]);
  if (loading) {
    return <LoadingPage />;
  }
  return (
    <div className="App">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        {user ? (
          <>
            <MySider />
            <Content>
              <div className="contentDiv">
                <Routes>
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/" element={<MainPage />} />
                  <Route path="/PostPage" element={<PostPage />} />
                  <Route path="/update/:userId" element={<UserUpdatePage />} />
                  <Route path="*" element={<MainPage />} />
                </Routes>
              </div>
            </Content>
          </>
        ) : (
          <Content>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<LoginPage />} />
            </Routes>
          </Content>
        )}
      </Layout>
    </div>
  );
}

export default App;
