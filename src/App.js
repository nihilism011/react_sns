import { Route, Routes } from "react-router-dom";
import Header from "./components/MainHeader.js";
import UserUpdatePage from "./page/user-update.js";
import TwoPage from "./page/TwoPage.js";
import NotFound from "./page/NotFound.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/two" element={<TwoPage />} />
        <Route path="/update/:userId" element={<UserUpdatePage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
