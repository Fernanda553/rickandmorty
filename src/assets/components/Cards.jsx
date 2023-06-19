import Card from "react-bootstrap/Card";

function Cards({ image, name, species, status }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{species}</Card.Text>
        <h3>{status}</h3>
      </Card.Body>
    </Card>
  );
}

export default Cards;
