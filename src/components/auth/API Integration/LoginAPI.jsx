import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://localhost:7210/api/Authenticate/login")
      .then((response) => SetUsers(response.data))
      .catch((error) => console.error("Error fetching login:", error));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default UsersList;
