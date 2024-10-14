import { Route, Routes } from "react-router-dom";
import Header from "./components/MainHeader.js";
import UserUpdatePage from "./components/user-update.js";
import TwoPage from "./components/TwoPage.js";
import NotFound from "./components/notFound.js";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/two" element={<TwoPage />} />
        <Route path="/" element={<UserUpdatePage userId={1} />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
