import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Selector from "./assets/components/Selector.jsx";
import Cards from "./assets/components/Cards.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  async function getData(url) {
    const response = await fetch(url);
    const info = await response.json();
    return info;
  }

  const getCharacter = async () => {
    try {
      const character = await getData(
        "https://rickandmortyapi.com/api/character"
      );
      setCharacters(character.results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <Container fluid>
      <h1 className="p-4">Find your character</h1>
      <Container fluid>
        <Row>
          <Col className="m-4 p-4">
            <Selector />
          </Col>
        </Row>
        <Row>
          <Cards characters={characters} />
        </Row>
      </Container>
    </Container>
  );
}

export default App;
