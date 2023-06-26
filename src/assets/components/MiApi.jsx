import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Buscador from "./Buscador";
import Cards from "./Cards";

const MiApi = () => {
  const [characters, setCharacters] = useState([]);
  const [selector, setSelector] = useState("");

  const getData = async (url) => {
    const response = await fetch(url);
    const info = await response.json();
    return info;
  };

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

  const handlerChange = (e) => {
    setSelector(e.target.value);
    console.log(selector);
  };

  const sendCharacter = async (e) => {
    e.preventDefault();

    const characterName = await getData(
      "https://rickandmortyapi.com/api/character"
    );
    const dataOfNames = characterName.results;
    const names = dataOfNames.map((n) => n.name);
    const sortedNames = names.sort();
    console.log(sortedNames);
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
            <Buscador
              selector={selector}
              sendCharacter={sendCharacter}
              handlerChange={handlerChange}
              characters={characters}
            />
          </Col>
        </Row>
        <Row>
          <Cards characters={characters} />
        </Row>
      </Container>
    </Container>
  );
};

export default MiApi;
