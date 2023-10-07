import { useRef } from "react";
import { Task } from "../../interfaces";

interface IFormProps {
  tasks: Task[];
  setTasks: Function;
}

const Form: React.FC<IFormProps> = (props: IFormProps) => {
  const { tasks, setTasks } = props;

  //   const tasks = props.tasks
  //   const setTasks = props.setTasks;

  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    const inputElem = inputRef.current;

    if (inputElem) {
      if (inputElem.value.trim() === "") {
        return;
      }

      const task = {
        title: inputElem.value,
        id: Math.random(),
      };

      setTasks([...tasks, task]);
      inputElem.value = "";
    }
  };

  return (
    <div>
      <label>
        <span>Task title</span>
        <input type="text" ref={inputRef} />
      </label>

      <button onClick={clickHandler}>Add task</button>
    </div>
  );
};

export default Form;
