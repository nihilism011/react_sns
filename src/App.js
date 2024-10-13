import Fruit from "./components/listTest.js";
import Form from "./components/formTest.js";
import SignupPage from "./components/signupPage.js";
function App() {
  return (
    <div className="App">
      <Fruit list={["apple", "banana", 3]} />
      <Form />
      <div>hello world</div>
      <SignupPage />
    </div>
  );
}

export default App;
