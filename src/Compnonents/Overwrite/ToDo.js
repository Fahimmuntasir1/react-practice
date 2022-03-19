import React, { useEffect, useState } from "react";

const ToDo = (props) => {
  const [users, setUser] = useState([]);
//   console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      {/* <h2>{props.heading}</h2>
      <h3>{props.author}</h3> */}

      <h2>All Users {users.length}</h2>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

const User = (props) => {
    // console.log(props);
  return (
    <div>
      <h2>Title: {props.user.title}</h2>
      <h3>hello</h3>
    </div>
  );
};

export default ToDo;
