import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="Card">
        <h1>{props.name}</h1>
        <h2>{props.date}</h2>
      </div>
    </>
  );
}
