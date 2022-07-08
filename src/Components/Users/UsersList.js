import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";
const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.data.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} Years old.)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default UsersList;
