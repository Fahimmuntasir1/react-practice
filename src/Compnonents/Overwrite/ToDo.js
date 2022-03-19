import React, { useEffect, useState } from "react";
import "./ToDo.css";

const ToDo = (props) => {
  const [comments, setComments] = useState([]);
  //   console.log(users);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      {/* <h2>{props.heading}</h2>
      <h3>{props.author}</h3> */}

      <h2>Available Comments {comments.length}</h2>
      {comments.map((comment) => (
        <User comment={comment} key={comment.id}></User>
      ))}
    </div>
  );
};

const User = (props) => {
  console.log(props);
  return (
    <div className="todo-style">
      <p>id:{props.comment.id}</p>
      <p className="name">UserName: {props.comment.name}</p>
      <p className="email">Email: {props.comment.email}</p>
      <p className="comment"> {props.comment.body}</p>
    </div>
  );
};

export default ToDo;
