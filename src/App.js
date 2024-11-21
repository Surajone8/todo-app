import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {

    const [Data, setData] = useState({});

    console.log(Data);

  return (
    <div>
        <TodoList />
    </div>
  )
}

export default App
