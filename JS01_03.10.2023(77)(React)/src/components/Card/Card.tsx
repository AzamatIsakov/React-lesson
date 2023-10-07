import "./Card.css";

interface ICardProps {
  title: string;
  price: number;
  image: string;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
  return (
    <div className="card">
      <img src={props.image} alt="" width={100} />
      <h2>{props.title}</h2>
      <p>${props.price}</p>
    </div>
  );
};

export default Card;
