import { Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(20),
      height: theme.spacing(30),
    },
  },
}));
const Message = () => {
  //const { loading = false } = props;
  const [userName, setUsername] = useState("mohan");
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [todo, setTodos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
    return () => {
      console.log("will un mount");
    };
  }, [count]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((todo) => {
        setTodos(todo);
      });
    return () => {
      console.log("will un mount");
    };
  }, [count]);
  return (
    <div>
      <Typography variant="h1">{userName}</Typography>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => setUsername("krishna")}
      >
        Change Name
      </Button>
      <div className="">
        <IconButton onClick={() => setCount(count + 1)} color="secondary">
          <AddIcon />
        </IconButton>
        <Typography variant="h3">{count}</Typography>
        <IconButton onClick={() => setCount(count - 1)} color="secondary">
          <RemoveIcon />
        </IconButton>
      </div>
      <h1>Users</h1>
      <div className={classes.root}>
        {data.map((user) => (
          <Paper key={user.name} elevation={3}>
            <h3>{user.name}</h3>
          </Paper>
        ))}
      </div>
      <h1>Todos</h1>
      <div className={classes.root}>
        {todo.map((todo) => (
          <Paper key={todo.title} elevation={3}>
            <h3>{todo.title}</h3>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Message;

//mergining in class components

// import React, { Component } from "react";
// import Button from "@material-ui/core/Button";

// class Message extends Component {
//   state = {
//     userName: "Mohan",
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.userName}</h1>
//         <Button
//           variant="contained"
//           color="secondary"
//           onClick={() => {
//             this.setState({
//               userName: "krishna",
//             });
//           }}
//         >
//           Change Name
//         </Button>
//       </div>
//     );
//   }
// }

// export default Message;
