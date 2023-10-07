import { useState, useRef } from "react";
import { Form, List } from "./components";

import { Task } from "./interfaces";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>Todo List</h1>
      <Form tasks={tasks} setTasks={setTasks} />
      <List data={tasks} />
    </>
  );
};

export default App;
