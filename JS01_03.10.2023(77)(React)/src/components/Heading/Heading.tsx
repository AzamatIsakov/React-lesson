interface IHeadingProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}

const Heading: React.FC<IHeadingProps> = (props: IHeadingProps) => {
  return <props.type>{props.text}</props.type>;
};

export default Heading;
