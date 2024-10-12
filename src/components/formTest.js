import { useState } from "react";

export default function Form() {
  let [firstName, setFName] = useState("");
  let [lastName, setLName] = useState("");

  function handleFirstNameChange(e) {
    console.log(firstName);
    // console.log(e.target.value);
    setFName(e.target.value);
    console.log(firstName);
  }

  function handleLastNameChange(e) {
    setLName(e.target.value);
    console.log(lastName);
  }

  function handleReset() {
    setFName("");
    setLName("");
  }
  const testConsole = () => {
    console.log(firstName);
    console.log(lastName);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input placeholder="Last name" onChange={handleLastNameChange} />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
      <button onClick={testConsole}>console</button>
    </form>
  );
}
