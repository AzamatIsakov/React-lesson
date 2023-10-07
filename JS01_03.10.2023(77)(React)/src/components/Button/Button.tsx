import "./Button.css";

interface IButtonProps {
  value: string;
  bgColor?: string;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button style={{ backgroundColor: props.bgColor }}>{props.value}</button>
  );
};

export default Button;
