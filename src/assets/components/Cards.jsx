import { Card, Col } from "react-bootstrap";

function Cards({ characters }) {
  return (
    <>
      {characters.map((c) => {
        return (
          <Col key={c?.id}>
            <Card className="cards">
              <Card.Img
                className="m-auto py-2"
                style={{ width: "14rem" }}
                variant="top"
                src={c?.image}
              />
              <Card.Body>
                <Card.Title>{c?.name}</Card.Title>
                <Card.Text>{c?.status}</Card.Text>
                <h4>{c?.species}</h4>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
}

export default Cards;
