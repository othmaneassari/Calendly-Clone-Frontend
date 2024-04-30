import React, { useState, useEffect } from "react";
import Login from "../Login";
import axios from "axios";

function LoginAPI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     history.push("/Dashboard");
  //   }
  // });

  async function login() {
    return;
    //     console.warn(email, password);
    //     let item = { email, password };
    //     let result = await fetch(""),{
    //       method:'POST',
    //       headers:{"Content-type":"application/JSON","Accept":"application/JSON",
    // },
    //       body:JSON.stringify(item)
    //     };
    //     result = await result.JSON();
    //     localStorage.setItem("user-info", JSON.stringify(result))
    //     history.push("/Dashboard")
  }
  return (
    <div>
      <Login />
    </div>
  );
}

export default LoginAPI;
