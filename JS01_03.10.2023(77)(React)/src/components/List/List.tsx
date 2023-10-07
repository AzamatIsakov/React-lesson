import { Task } from "../../interfaces";

interface IListProps {
  data: Task[];
}

const List: React.FC<IListProps> = (props: IListProps) => {
  return (
    <ul>
      {props.data.map((task: Task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
};

export default List;
