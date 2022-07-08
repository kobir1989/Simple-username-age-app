import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UsersList from "./Components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: uAge,
          id: Math.floor(Math.random() * 1000).toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUsers onSaveFormData={addUserHandler} />
      <UsersList data={usersList} />
    </div>
  );
}

export default App;
