import React from "react";

export default function App() {
  const [userName, setUserName] = React.useState("James");
  const [userAge, setUserAge] = React.useState(21);

  const updateUsername = () => {
    userName === "James" ? setUserName("Mark") : setUserName("James");
  };

  const updateUserAge = () => {
    userAge === 21 ? setUserAge(25) : setUserAge(21);
  };

  return (
    <>
      <h1>User details:</h1>
      <h2>{userName}</h2>
      <h2>{userAge}</h2>
      <button onClick={updateUsername}>Update username</button>
      <button onClick={updateUserAge}>Update user age</button>
    </>
  );
}
