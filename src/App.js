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
import { LoginProvider } from "./components/LoginContext.js";
import LoginPage from "./page/LoginPage.js";

function App() {
  return (
    <div className="App">
      <LoginProvider>
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
              <Route path="/home" element={<MainPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/three" element={<TestUserTable id={1} />} />
              <Route path="/testPage" element={<TestPage />} />
              <Route path="/update/:userId" element={<UserUpdatePage />} />
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </Content>
        </Layout>
      </LoginProvider>
    </div>
  );
}

export default App;
