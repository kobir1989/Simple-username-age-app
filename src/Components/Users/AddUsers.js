import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import ErrorModal from "../UI/ErrorModal";

import Button from "../UI/Button";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");
  //form submit
  const addUserHandler = (e) => {
    e.preventDefault();
    // conditions to check input fields are not empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length < 0) {
      setError({
        title: "invalid Input",
        message: "Please enter valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter valid age (> 0).",
      });
    }

    props.onSaveFormData(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  //state Change
  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };

  //state Change
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUsername}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredAge}
          ></input>
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUsers;
