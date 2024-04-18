import { useState } from "react";
import { Link } from "react-router-dom";
// import classes from "index.css";

function Form() {
  const [enteredBody, setEnteredBody] = useState("");
  const [receivedBody, setReceivedBody] = useState("");
  console.log(enteredBody);

  return (
    <>
      <p>
        <label className="text-lg " htmlFor="body">
          Enter your text here
        </label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={(e) => setEnteredBody(e.target.value)}
        />
      </p>
      <div>
        <button onClick={(e) => setReceivedBody(enteredBody)}>
          Click here
        </button>
      </div>
      <h1> {receivedBody} </h1>
      <Link to={`/Login`}> Go Login</Link>
    </>
  );
}

export default Form;
