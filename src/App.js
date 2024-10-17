import { Route, Routes } from "react-router-dom";
import Header from "./components/MainHeader.js";
import UserUpdatePage from "./page/user-update.js";
import TestPage from "./page/TestPage.js";
import NotFound from "./page/NotFound.js";
import TestUserTable from "./page/TestUserTable.js";
import SignupPage from "./page/SignupPage.js";
import HomePage from "./page/HomePage";

import { Layout } from "antd";
import MySider from "./components/MySider.js";

function App() {
  return (
    <div className="App">
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <MySider />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/three" element={<TestUserTable id={1} />} />
          <Route path="/testPage" element={<TestPage />} />
          <Route path="/update/:userId" element={<UserUpdatePage />} />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
